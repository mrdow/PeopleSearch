using Microsoft.AspNetCore.Hosting;
using PeopleSearch.Models;
using System;
using System.IO;
using System.Linq;

namespace PeopleSearch.Data
{
    /// <summary>
    /// A class for seeding data into the provided PeopleSearchDbContext.
    /// </summary>
    public class DbInitializer
    {
        private readonly PeopleSearchDbContext _context;
        private readonly IHostingEnvironment _env;

        /// <summary>
        /// Constructor which expects a PeopleSearchDbContex to be initialized and
        /// an IHostingEnvironment to retrieve environment variables.
        /// </summary>
        /// <param name="context">The PeopleSearchDbContext to be initialized.</param>
        /// <param name="env">The IHostingEnvironment to provide environment variables.</param>
        public DbInitializer(PeopleSearchDbContext context, IHostingEnvironment env)
        {
            _context = context;
            _env = env;
        }

        /// <summary>
        /// Initializes the member PeopleSearchDbContext if it does not contain any People.
        /// </summary>
        /// <remarks>Calls EnsureCreated() to ensure that the underlying database exists.</remarks>
        public void Initialize()
        {
            _context.Database.EnsureCreated();

            if (_context.People.Any())
            {
                return;
            }

            Person[] people = new[]
            {
                new Person{
                    FirstName = "Alex",
                    LastName = "Dow",
                    BirthDate = new DateTime(1988, 11, 1),
                    Address = new Address { Address1 = "6821 Upland Dr", City = "Arlington", State = StateCode.WA, Zip = "98223" },
                    Image = File.ReadAllBytes($"{_env.ContentRootPath}/Images/AlexDow.jpg"),
                    Interests = new Interest[]
                    {
                        new Interest { Name = "Hiking" },
                        new Interest { Name = "Financial podcasts" },
                        new Interest { Name = "Football" }
                    }
                },
                new Person
                {
                    FirstName = "Elvis",
                    LastName = "Presley",
                    BirthDate = new DateTime(1935, 1, 8),
                    DeathDate = new DateTime(1977, 8, 16),
                    Address = new Address { Address1 = "3764 Elvis Presley Blvd", City = "Memphis", State = StateCode.TN, Zip = "38116" },
                    Image = File.ReadAllBytes($"{_env.ContentRootPath}/Images/ElvisPresley.jpg"),
                    Interests = new Interest[]
                    {
                        new Interest { Name = "Music" },
                        new Interest { Name = "Martial arts" },
                        new Interest { Name = "Football" }
                    }
                },
                new Person
                {
                    FirstName = "Test",
                    LastName = "Person",
                    BirthDate = DateTime.Now
                },
                new Person
                {
                    FirstName = "Someone",
                    LastName = "Else",
                    BirthDate = DateTime.Now.AddYears(-30)
                }
            };
            
            _context.People.AddRange(people);
            _context.SaveChanges();
        }
    }
}
