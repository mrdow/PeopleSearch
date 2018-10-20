using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using PeopleSearch.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleSearch.Pages.People
{
    public class IndexModel : PageModel
    {
        private readonly Data.PeopleSearchDbContext _context;

        public IndexModel(Data.PeopleSearchDbContext context)
        {
            _context = context;
        }

        public string SearchString { get; set; }

        public IList<Person> People { get; set; }

        public async Task OnGetAsync(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            {
                People = await _context.People.ToListAsync();
                return;
            }

            People = await _context.People.Where(p => p.FirstName.Contains(searchString, StringComparison.OrdinalIgnoreCase)
                                            || p.LastName.Contains(searchString, StringComparison.OrdinalIgnoreCase)).ToListAsync();
        }
    }
}
