using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PeopleSearch.Data.Repositories.Interfaces;
using PeopleSearch.Models;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleSearch.Controllers
{
    //todo: comments
    // todo: tests
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly IImageRepository _imageRepository;

        public ImagesController(IImageRepository imageRepository)
        {
            _imageRepository = imageRepository;
        }

        [HttpGet]
        [Route("{id:long}")]
        public async Task<IActionResult> GetAsync(long id)
        {
            var image = await _imageRepository.GetByIdAsync(id);
            return File(image.Data, image.ContentType);
        }

        [HttpPut]
        public async Task<long> PutAsync(long id=0)
        {
            if (HttpContext.Request.Form.Files.Any())
            {
                var file = HttpContext.Request.Form.Files.First();
                var image = await _imageRepository.AddOrUpdateImage(file, id);
                return image.Id;
            }

            return 0;
        }
    }
}
