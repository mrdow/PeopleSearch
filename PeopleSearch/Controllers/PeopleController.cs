using Microsoft.AspNetCore.Mvc;
using PeopleSearch.Data.Repositories;
using PeopleSearch.Data.Repositories.Interfaces;
using PeopleSearch.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PeopleSearch.Controllers
{
    /// <summary>
    /// Controller for People related actions.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly IPersonRepository _personRepository;

        /// <summary>
        /// Constructor which expects an IPersonRepository.
        /// </summary>
        /// <param name="personRepository">The repository to use to manage People.</param>
        public PeopleController(IPersonRepository personRepository)
        {
            _personRepository = personRepository;
        }

        /// <summary>
        /// Gets a list of Person objects matching the provided searchString, or all Person objects if searchString is null.
        /// </summary>
        /// <param name="searchString">The string to search for anywhere within each Person's FirstName and LastName.</param>
        /// <returns>A list of Person objects identified by the searchString.</returns>
        [HttpGet]
        public async Task<IList<Person>> GetAsync(string searchString = null)
        {
            return await _personRepository.SearchPeopleAsync(searchString);
        }

        /// <summary>
        /// Adds the provided Person to the repository.
        /// </summary>
        /// <param name="person">The Person object to add to the repository.</param>
        /// <returns>The Task to be awaited.</returns>
        [HttpPost]
        public async Task PostAsync(Person person)
        {
            await _personRepository.AddPersonAsync(person);
        }
    }
}
