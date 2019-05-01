using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PeopleSearch.API.DataAccess.Repositories.Interfaces;
using PeopleSearch.API.Models;

namespace PeopleSearch.API.Controllers
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
        public async Task<ActionResult<IEnumerable<Person>>> GetAsync(string searchString = null)
        {
            return (await _personRepository.SearchPeopleAsync(searchString)).ToList();
        }

        /// <summary>
        /// Gets the Person matching the provided id.
        /// </summary>
        /// <param name="id">The id of the person to return.</param>
        /// <returns>The Person identified by the id or null.</returns>
        [HttpGet]
        [Route("{id:long}")]
        public async Task<ActionResult<Person>> GetByIdAsync(long id)
        {
            var result = await _personRepository.GetByIdAsync(id);
            if (result != null)
            {
                return result;
            }

            return NotFound();
        }

        /// <summary>
        /// Adds or updates the Provided Person.
        /// </summary>
        /// <param name="person">The Person to add or update.</param>
        /// <returns>The updated Person</returns>
        [HttpPut]
        public async Task<ActionResult<Person>> PutAsync(Person person)
        {
            return await _personRepository.AddOrUpdatePerson(person);
        }

        /// <summary>
        /// Adds the provided Person to the repository.
        /// </summary>
        /// <param name="person">The Person to add to the repository.</param>
        /// <returns>The Task to be awaited.</returns>
        [HttpPost]
        public async Task<ActionResult<Person>> PostAsync(Person person)
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
        public async Task<ActionResult> DeleteAsync(long id)
        {
            await _personRepository.DeletePersonAsync(id);
            return Ok();
        }
    }
}
