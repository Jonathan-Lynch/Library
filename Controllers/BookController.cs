using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace capstone.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BookController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Book> Get()
        {
            var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;

            if (userId == null) {
                return _context.Books;
            }
            return _context.Books.Where(m => m.UserId == userId);
        }

        [HttpPost]
        public Book Post([FromBody]Book books)
        {
            books.UserId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            _context.Add(books);
            _context.SaveChanges();

            return books;
        }
    }
}
