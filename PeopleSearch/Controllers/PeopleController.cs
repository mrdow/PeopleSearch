using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PeopleSearch.Data.Repositories;
using PeopleSearch.Data.Repositories.Interfaces;
using PeopleSearch.Models;
using PeopleSearch.Utils.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading;
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
        [Route("")]
        [Route("searchString")]
        public async Task<IList<Person>> GetAsync(string searchString = null)
        {
            return await _personRepository.SearchPeopleAsync(searchString);
        }
        
        /// <summary>
        /// Gets the Person matching the provided id.
        /// </summary>
        /// <param name="id">The id of the person to return.</param>
        /// <returns>The Person identified by the id or null.</returns>
        [HttpGet]
        [Route("{id:long}")]
        public async Task<Person> GetByIdAsync(long id)
        {
            return await _personRepository.GetByIdAsync(id);
        }
        
        /// <summary>
        /// Adds or updates the Provided Person.
        /// </summary>
        /// <param name="person">The Person to add or update.</param>
        /// <returns>The updated Person</returns>
        [HttpPut]
        public async Task<Person> PutAsync(Person person)
        {
            return await _personRepository.AddOrUpdatePerson(person);
        }

        /// <summary>
        /// Adds the provided Person to the repository.
        /// </summary>
        /// <param name="person">The Person to add to the repository.</param>
        /// <returns>The Task to be awaited.</returns>
        [HttpPost]
        public async Task<Person> PostAsync(Person person)
        {
            return await _personRepository.AddPersonAsync(person);
        }
        
        /// <summary>
        /// Deletes the Person identified by the provided id.
        /// </summary>
        /// <param name="id">The id of the Person to delete.</param>
        /// <returns>The Task to be awaited.</returns>
        [HttpDelete]
        [Route("{id:long}")]
        public async Task DeleteAsync(long id)
        {
            await _personRepository.DeletePersonAsync(id);
        }
    }
}
