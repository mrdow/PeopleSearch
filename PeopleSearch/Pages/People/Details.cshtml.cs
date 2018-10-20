using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using PeopleSearch.Data;
using PeopleSearch.Models;

namespace PeopleSearch.Pages.People
{
    public class DetailsModel : PageModel
    {
        private readonly PeopleSearch.Data.PeopleSearchDbContext _context;

        public DetailsModel(PeopleSearch.Data.PeopleSearchDbContext context)
        {
            _context = context;
        }

        public Person Person { get; set; }

        public async Task<IActionResult> OnGetAsync(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Person = await _context.People.FirstOrDefaultAsync(m => m.Id == id);

            if (Person == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
