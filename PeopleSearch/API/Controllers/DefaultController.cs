using Microsoft.AspNetCore.Mvc;

namespace PeopleSearch.API.Controllers
{
    /// <summary>
    /// Default controller to route non-API requests back to the single page.
    /// </summary>
    public class DefaultController : Controller
    {
        /// <summary>
        /// Catch-all path to the single-page app.
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return File("~/index.html", "text/html");
        }
    }
}
