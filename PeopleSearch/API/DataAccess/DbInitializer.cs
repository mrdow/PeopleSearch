using System;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using PeopleSearch.API.Models;

namespace PeopleSearch.API.DataAccess
{
    /// <summary>
    /// A class for seeding data into the provided PeopleSearchDbContext.
    /// </summary>
    [ExcludeFromCodeCoverage]
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
            
            string imagePath = $"{_env.ContentRootPath}/Resources/AlexDow.jpg";
            byte[] imageBytes = File.ReadAllBytes(imagePath);
            string base64String = Convert.ToBase64String(imageBytes);

            Image image1 = new Image
                {
                    Name = Path.GetFileName(imagePath),
                    File = Convert.FromBase64String(base64String),
                    ContentType = $"img/{Path.GetExtension(imagePath).Replace(".", "")}"
                };
            imagePath = $"{_env.ContentRootPath}/Resources/ElvisPresley.jpg";
            imageBytes = File.ReadAllBytes(imagePath);
            base64String = Convert.ToBase64String(imageBytes);
            Image image2 = new Image
                {
                    Name = Path.GetFileName(imagePath),
                    File = Convert.FromBase64String(base64String),
                    ContentType = $"img/{Path.GetExtension(imagePath).Replace(".", "")}"
                };

            Person[] people = new[]
            {
                new Person{
                    Image = image1,
                    FirstName = "Alex",
                    LastName = "Dow",
                    BirthDate = new DateTime(1988, 11, 1),
                    Address = new Address { Address1 = "6821 Upland Dr", City = "Arlington", State = StateCode.WA, Zip = "98223" },
                    Interests = new Interest[]
                    {
                        new Interest { Name = "Hiking" },
                        new Interest { Name = "Financial podcasts" },
                        new Interest { Name = "Football" }
                    }
                },
                new Person
                {
                    Image = image2,
                    FirstName = "Elvis",
                    LastName = "Presley",
                    BirthDate = new DateTime(1935, 1, 8),
                    DeathDate = new DateTime(1977, 8, 16),
                    Address = new Address { Address1 = "3764 Elvis Presley Blvd", City = "Memphis", State = StateCode.TN, Zip = "38116" },
                    Interests = new Interest[]
                    {
                        new Interest { Name = "Music" },
                        new Interest { Name = "Martial arts" },
                        new Interest { Name = "Football" },
                        new Interest { Name = "Meatloaf" }
                    }
                }
            };

            _context.People.AddRange(people);
            _context.SaveChanges();
        }
    }
}
