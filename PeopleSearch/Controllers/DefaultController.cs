using Microsoft.AspNetCore.Mvc;

namespace PeopleSearch.Controllers
{
    public class DefaultController : Controller
    {
        public IActionResult Index()
        {
            return File("~/index.html", "text/html");
        }
    }
}
