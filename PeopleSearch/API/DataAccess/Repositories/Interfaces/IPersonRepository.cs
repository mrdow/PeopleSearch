using System.Collections.Generic;
using System.Threading.Tasks;
using PeopleSearch.API.Models;

namespace PeopleSearch.API.DataAccess.Repositories.Interfaces
{
    /// <summary>
    /// Repository for Person objects.
    /// </summary>
    public interface IPersonRepository
    {
        /// <summary>
        /// Gets a list of all Person objects.
        /// </summary>
        /// <returns>A list of Person objects.</returns>
        Task<IList<Person>> AllPeopleAsync();

        /// <summary>
        /// Gets a list of Person objects matching the provided searchString, or all Person objects if searchString is null.
        /// </summary>
        /// <param name="searchString">The string to search for anywhere within each Person's FirstName and LastName.</param>
        /// <returns>A list of Person objects identified by the searchString.</returns>
        Task<IList<Person>> SearchPeopleAsync(string searchString);
        
        /// <summary>
        /// Gets the Person matching the provided id.
        /// </summary>
        /// <param name="id">The id of the person to retrieve.</param>
        /// <returns>The Person identified by the id or null.</returns>
        Task<Person> GetByIdAsync(long id);

        /// <summary>
        /// Adds the provided Person to the repository.
        /// </summary>
        /// <param name="person">The Person to add to the repository.</param>
        /// <returns>The Person that was added or null.</returns>
        Task<Person> AddPersonAsync(Person person);
        
        /// <summary>
        /// Adds or updates the provided person in the repository.
        /// </summary>
        /// <param name="person">The Person to add or update.</param>
        /// <returns>The updated Person.</returns>
        Task<Person> AddOrUpdatePerson(Person person);
        
        /// <summary>
        /// Deletes the Person identified by the provided id.
        /// </summary>
        /// <param name="id">The id of the Person to delete.</param>
        /// <returns>The Task to be awaited.</returns>
        Task DeletePersonAsync(long id);
    }
}
