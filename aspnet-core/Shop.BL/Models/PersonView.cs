using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.BL.Models
{
    public class PersonView
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
    }
}
