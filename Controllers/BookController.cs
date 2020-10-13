using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace capstone.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class BookController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Book> Get()
        {
            Book[] books = null;
            using (var context = new ApplicationDbContext())
            {
                books = context.Books.ToArray();
            }
            return books;

        }
        [HttpPost]
        public Book Post([FromBody]Book book)
        {
            using (var context = new ApplicationDbContext())
            {
                context.Books.Add(book);
                context.SaveChanges();
            }
            return book;
        }
    }
}
