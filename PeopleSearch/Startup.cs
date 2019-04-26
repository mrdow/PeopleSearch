using System.Diagnostics.CodeAnalysis;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using PeopleSearch.API.DataAccess;
using PeopleSearch.API.DataAccess.Repositories;
using PeopleSearch.API.DataAccess.Repositories.Interfaces;
using PeopleSearch.API.Filters;
using PeopleSearch.API.Utils;
using PeopleSearch.API.Utils.Interfaces;

namespace PeopleSearch
{
    [ExcludeFromCodeCoverage]
    public class Startup
    {
        private readonly IConfiguration _configuration;

        /// <summary>
        /// Constructor which expects an IHostingEnvironment to retrieve environment variables.
        /// </summary>
        /// <param name="env"></param>
        public Startup(IHostingEnvironment env)
        {
            _configuration = new ConfigurationBuilder()
                .AddJsonFile($"{env.ContentRootPath}/config.json")
                .Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<DbInitializer>();
            services.AddDbContext<PeopleSearchDbContext>(options =>
            {
                var peopleSearchConnectionString = _configuration.GetConnectionString("PeopleSearchConnectionString");
                options.UseSqlServer(peopleSearchConnectionString);
            });
            services.AddTransient<IPersonRepository, PersonRepository>();
            services.AddTransient<LatencySimulationFilter>();
            services.AddTransient<ILatencySimulator, LatencySimulator>();

            services.AddMvc(options =>
            {
                options.Filters.Add(new ValidateModelFilter());

                if (_configuration.GetValue<bool>("LatencySimulation:Enabled"))
                {
                    options.Filters.Add(typeof(LatencySimulationFilter));
                }
            })
            .SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
            .AddJsonOptions(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseDeveloperExceptionPage();

            app.UseStaticFiles();
            app.UseMvc(routes =>
            {
                routes.MapRoute("default", "api/{controller}/{id?}");
                routes.MapRoute("catchAll", "{*url}", defaults: new { controller = "Default", action = "Index" });
            });
        }
    }
}
