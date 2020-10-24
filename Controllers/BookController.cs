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
            var userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null) {
                return _context.Books;
            }
            return _context.Books.Where(m => m.UserId == userId);
        }

        [HttpPost]
        public Book Post([FromBody]Book books)
        {
            books.UserId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
            _context.Add(books);
            _context.SaveChanges();

            return books;
        }

        [HttpDelete]
        public void Delete([FromRoute] int id) 
        {
            var books = _context.Books.FirstOrDefault(b => b.Id == id);
            _context.Books.Remove(books);
            _context.SaveChanges();
        }

        [HttpPut("{id}")]
        public Book Put([FromRoute] int id, [FromBody] Book book) 
        {
            var currentBook = _context.Books.Find(book.Id);
            if (currentBook == null) return null;
            _context.Entry(currentBook).CurrentValues.SetValues(book);
            _context.Books.Update(currentBook);
            _context.SaveChanges();
            return currentBook;
        }
    }
}
