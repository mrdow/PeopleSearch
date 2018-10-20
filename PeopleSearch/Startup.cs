using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PeopleSearch.Data;
using PeopleSearch.Data.Repositories;
using PeopleSearch.Data.Repositories.Interfaces;
using PeopleSearch.Filters;

namespace PeopleSearch
{
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
            services.AddMvc(options =>
            {
                options.Filters.Add(new ValidateModelFilter());
            });

            services.AddTransient<DbInitializer>();

            services.AddDbContext<PeopleSearchDbContext>(options =>
            {
                var peopleSearchConnectionString = _configuration.GetConnectionString("PeopleSearchConnectionString");
                options.UseSqlServer(peopleSearchConnectionString);
            });

            services.AddTransient<IPersonRepository, PersonRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseDeveloperExceptionPage();

            app.UseMvcWithDefaultRoute();
        }
    }
}
