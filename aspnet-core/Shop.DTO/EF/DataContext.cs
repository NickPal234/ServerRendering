using Microsoft.EntityFrameworkCore;
using Shop.DTO.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.DTO.EF
{
    public class DataContext : DbContext
    {
   public DataContext()
        {
            //Database.EnsureCreated( );
        
        }
        public DbSet<Person> Persons { get; set; }
        public DbSet<Product> Products { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS; Database=musicShop;Trusted_Connection=True;");
        }
    }


}
