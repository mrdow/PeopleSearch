using PeopleSearch.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PeopleSearch.Data.Repositories.Interfaces
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
        /// Adds the provided Person object to the repository.
        /// </summary>
        /// <param name="person">The Person object to add to the repository.</param>
        /// <returns>The Task to be awaited.</returns>
        Task AddPersonAsync(Person person);
    }
}
