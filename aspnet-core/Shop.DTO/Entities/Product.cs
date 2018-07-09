using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.DTO.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public string Image { get; set; }
        public string ImageType { get; set; }
        public double Price { get; set; }
        public string Duration { get; set; }

    }
}
