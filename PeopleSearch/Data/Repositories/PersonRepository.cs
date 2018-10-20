using Microsoft.EntityFrameworkCore;
using PeopleSearch.Data.Repositories.Interfaces;
using PeopleSearch.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleSearch.Data.Repositories
{
    /// <summary>
    /// Repository for Person objects.
    /// </summary>
    public class PersonRepository : IPersonRepository
    {
        private readonly PeopleSearchDbContext _context;

        /// <summary>
        /// Constructor which expects a PeopleSearchDbContext to use as the repository.
        /// </summary>
        /// <param name="context">The context to use as the repository.</param>
        public PersonRepository(PeopleSearchDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Gets a list of all Person objects.
        /// </summary>
        /// <returns>A list of Person objects.</returns>
        public async Task<IList<Person>> AllPeopleAsync()
        {
            return await _context
                .People
                .Include(person => person.Address)
                .Include(person => person.Interests)
                .AsNoTracking()
                .ToListAsync();
        }

        /// <summary>
        /// Gets a list of Person objects matching the provided searchString, or all Person objects if searchString is null.
        /// </summary>
        /// <param name="searchString">The string to search for anywhere within each Person's FirstName and LastName.</param>
        /// <returns>A list of Person objects identified by the searchString.</returns>
        public async Task<IList<Person>> SearchPeopleAsync(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            {
                return await AllPeopleAsync();
            }

            return await _context
                .People
                .Include(person => person.Address)
                .Include(person => person.Interests)
                .AsNoTracking()
                .Where(p => p.FirstName.Contains(searchString, StringComparison.OrdinalIgnoreCase)
                        || p.LastName.Contains(searchString, StringComparison.OrdinalIgnoreCase)).ToListAsync();
        }

        /// <summary>
        /// Adds the provided Person object to the repository.
        /// </summary>
        /// <param name="person">The Person object to add to the repository.</param>
        /// <returns>The Task to be awaited.</returns>
        public async Task AddPersonAsync(Person person)
        {
            if (person != null)
            {
                _context.People.Add(person);
                await _context.SaveChangesAsync();
            }
        }
    }
}
