using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using PeopleSearch.Data.Repositories.Interfaces;
using PeopleSearch.Models;
using System.IO;
using System.Threading.Tasks;

namespace PeopleSearch.Data.Repositories
{
    //todo: tests

    /// <summary>
    /// Repository for Image objects.
    /// </summary>
    public class ImageRepository : IImageRepository
    {
        private readonly PeopleSearchDbContext _context;

        /// <summary>
        /// Constructor which expects a PeopleSearchDbContext to use as the repository.
        /// </summary>
        /// <param name="context">The context to use as the repository.</param>
        public ImageRepository(PeopleSearchDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Gets the Image matching the provided id.
        /// </summary>
        /// <param name="id">The id of the Image to retrieve.</param>
        /// <returns>The Image identified by the id or null.</returns>
        public async Task<Image> GetByIdAsync(long id)
        {
            return await _context.Images
                .AsNoTracking()
                .SingleOrDefaultAsync(p => p.Id == id);
        }

        /// <summary>
        /// Adds or updates the provided Image in the repository.
        /// </summary>
        /// <param name="image">The image to add or update.</param>
        /// <param name="id">The id of the Image to update.</param>
        /// <returns>The updated Image.</returns>
        public async Task<Image> AddOrUpdateImage(IFormFile image, long id)
        {
            Image savedImage = null;
            if (image.Length > 0)
            {
                savedImage = new Image
                {
                    Id = id,
                    Name = image.FileName,
                    ContentType = image.ContentType
                };

                using (var memoryStream = new MemoryStream())
                {
                    await image.CopyToAsync(memoryStream);
                    savedImage.Data = memoryStream.ToArray();
                }
                
                _context.Entry(savedImage).State = id == 0 ? EntityState.Added : EntityState.Modified;
                await _context.SaveChangesAsync();
            }

            return savedImage;
        }

        /// <summary>
        /// Deletes the Image identified by the provided id.
        /// </summary>
        /// <param name="id">The id of the Image to delete.</param>
        /// <returns>The Task to be awaited.</returns>
        public async Task DeleteImageAsync(long id)
        {
            Image image = new Image
            {
                Id = id
            };

            _context.Attach(image);
            _context.Images.Remove(image);
            await _context.SaveChangesAsync();
        }
    }
}
