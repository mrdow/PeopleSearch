using Microsoft.EntityFrameworkCore;
using PeopleSearch.Models;

namespace PeopleSearch.Data
{
    /// <summary>
    /// DbContext for the PeopleSearch application.
    /// </summary>
    public class PeopleSearchDbContext : DbContext
    {
        /// <summary>
        /// A DbSet of Person objects.
        /// </summary>
        public DbSet<Person> People { get; set; }

        /// <summary>
        /// A DbSet of Interest objects.
        /// </summary>
        public DbSet<Interest> Interests { get; set; }

        /// <summary>
        /// A DbSet of Image objects.
        /// </summary>
        public DbSet<Image> Images { get; set; }

        /// <summary>
        /// Constructor expecting DbContextOptions.
        /// </summary>
        /// <param name="options">Any options to be applied to the DbContext.</param>
        public PeopleSearchDbContext(DbContextOptions options)
            : base(options) { }
    }
}
