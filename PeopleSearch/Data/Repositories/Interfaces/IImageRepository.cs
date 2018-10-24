using Microsoft.AspNetCore.Http;
using PeopleSearch.Models;
using System.Threading.Tasks;

namespace PeopleSearch.Data.Repositories.Interfaces
{
    /// <summary>
    /// Repository for Image objects.
    /// </summary>
    public interface IImageRepository
    {
        /// <summary>
        /// Gets the Image matching the provided id.
        /// </summary>
        /// <param name="id">The id of the Image to retrieve.</param>
        /// <returns>The Image identified by the id or null.</returns>
        Task<Image> GetByIdAsync(long id);

        /// <summary>
        /// Adds or updates the provided Image in the repository.
        /// </summary>
        /// <param name="image">The image to add or update.</param>
        /// <param name="id">The id of the Image to update.</param>
        /// <returns>The updated Image.</returns>
        Task<Image> AddOrUpdateImage(IFormFile image, long id);

        /// <summary>
        /// Deletes the Image identified by the provided id.
        /// </summary>
        /// <param name="id">The id of the Image to delete.</param>
        /// <returns>The Task to be awaited.</returns>
        Task DeleteImageAsync(long id);
    }
}
