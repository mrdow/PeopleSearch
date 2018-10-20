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
        /// Constructor expecting DbContextOptions.
        /// </summary>
        /// <param name="options">Any options to be applied to the DbContext.</param>
        public PeopleSearchDbContext(DbContextOptions options)
            : base(options) { }
    }
}
