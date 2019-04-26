using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PeopleSearch.API.DataAccess.Repositories.Interfaces;
using PeopleSearch.API.Models;
using PeopleSearch.API.Models.Interfaces;

namespace PeopleSearch.API.DataAccess.Repositories
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
                .Include(person => person.Image)
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
                .Where(p => p.FirstName.Contains(searchString, StringComparison.OrdinalIgnoreCase)
                        || p.LastName.Contains(searchString, StringComparison.OrdinalIgnoreCase))
                .Include(person => person.Image)
                .Include(person => person.Address)
                .Include(person => person.Interests)
                .AsNoTracking()
                .ToListAsync();
        }

        /// <summary>
        /// Gets the Person matching the provided id.
        /// </summary>
        /// <param name="id">The id of the person to retrieve.</param>
        /// <returns>The Person identified by the id or null.</returns>
        public async Task<Person> GetByIdAsync(long id)
        {
            return await _context
                .People
                .Include(person => person.Image)
                .Include(person => person.Address)
                .Include(person => person.Interests)
                .AsNoTracking()
                .SingleOrDefaultAsync(p => p.Id == id);
        }

        /// <summary>
        /// Adds the provided Person to the repository.
        /// </summary>
        /// <param name="person">The Person to add to the repository.</param>
        /// <returns>The Person that was added or null.</returns>
        public async Task<Person> AddPersonAsync(Person person)
        {
            if (person != null && person.Id == 0)
            {
                _context.People.Add(person);
                await _context.SaveChangesAsync();
            }

            return person;
        }

        /// <summary>
        /// Adds or updates the provided person in the repository.
        /// </summary>
        /// <param name="person">The Person to add or update.</param>
        /// <returns>The updated Person.</returns>
        public async Task<Person> AddOrUpdatePerson(Person person)
        {
            if (person != null)
            {
                _context.ChangeTracker.TrackGraph(person, e =>
                {
                    if (!e.Entry.IsKeySet)
                    {
                        e.Entry.State = EntityState.Added;
                    }
                    else if(e.Entry.Entity is ISoftDeletable deletable && deletable.IsDeleted)
                    {
                        e.Entry.State = EntityState.Deleted;
                    }
                    else
                    {
                        e.Entry.State = EntityState.Modified;
                    }
                });
                
                await _context.SaveChangesAsync();
            }

            return person;
        }

        /// <summary>
        /// Deletes the Person identified by the provided id.
        /// </summary>
        /// <param name="id">The id of the Person to delete.</param>
        /// <returns>The Task to be awaited.</returns>
        public async Task DeletePersonAsync(long id)
        {
            Person person = new Person { Id = id };
            _context.People.Attach(person);
            _context.People.Remove(person);
            await _context.SaveChangesAsync();
        }
    }
}
