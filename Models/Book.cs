using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Models
{
    public class Book
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Genre { get; set; }
        public int Chapters { get; set; }
        public DateTime YearOfPublish { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
