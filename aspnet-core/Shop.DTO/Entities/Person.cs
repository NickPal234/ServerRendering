using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.DTO.Entities
{
    public class Person
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
    }
}
