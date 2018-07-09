using Shop.DTO.EF;
using Shop.DTO.Entities;
using Shop.DTO.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Shop.DTO.Repositories
{
    public class UnitOfWork :  IUnitOfWork
    {
        private DataContext db;
        private Repository<Person> _personRepository;
        private Repository<Product> _productRepository;

        public UnitOfWork()
        {
            db = new DataContext();
            db.Database.EnsureCreated();
            if (db.Products.Count() < 10)
            {
                var str = Directory.GetCurrentDirectory()+"\\image\\";
                var list = new List<Product>() {  new Product() { Name = "Smoke on the Water", Author = "Deep Purple", Price = 7, Duration ="3.12", Image = "https://upload.wikimedia.org/wikipedia/ru/thumb/6/66/Smoke_on_the_Water.jpg/200px-Smoke_on_the_Water.jpg", ImageType = "jpeg" },
                    new Product() { Name = "Child In Time", Author = "Deep Purple", Price = 7, Duration = "3.12", Image = "https://upload.wikimedia.org/wikipedia/ru/thumb/6/66/Smoke_on_the_Water.jpg/200px-Smoke_on_the_Water.jpg", ImageType = "jpeg" },
                    new Product() { Name = "Hush", Author = "Deep Purple", Price = 7, Duration = "3.12", Image = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Deep_Purple_in_2004.jpg/250px-Deep_Purple_in_2004.jpg", ImageType = "jpeg" },
                new Product() { Name = "Smells Like Teen Spirit", Author = "Nirvana", Price = 7, Duration = "3.12", Image = "https://upload.wikimedia.org/wikipedia/ru/thumb/3/3c/Smells_Like_Teen_Spirit.jpg/200px-Smells_Like_Teen_Spirit.jpg", ImageType = "jpeg" },
                  new Product() { Name = "We Will Rock You", Author = "Queen", Price = 7, Duration = "3.12", Image = "https://ru.m.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:We_will_rock_you.jpg", ImageType = "jpeg" },
                new Product() { Name = "A kind of magic", Author = "Queen", Price = 7, Duration = "3.12", Image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Queen_%E2%80%93_montagem_%E2%80%93_new.png/250px-Queen_%E2%80%93_montagem_%E2%80%93_new.png", ImageType = "jpeg" },
                new Product() { Name = "Seven Nation Army", Author = "The White Stripes", Price = 7, Duration = "3.12", Image ="https://upload.wikimedia.org/wikipedia/ru/thumb/6/62/7nationarmy.jpg/200px-7nationarmy.jpg", ImageType = "jpeg" } };
                db.Products.AddRange(list);
                db.SaveChanges();
            }

        }

        public IRepository<Person> Persons
        {
            get
            {
                if (_personRepository == null)
                    _personRepository = new Repository<Person>(db);
                return _personRepository;
            }
        }

        public IRepository<Product> Products
        {
            get
            {
                if (_productRepository == null)
                    _productRepository = new Repository<Product>(db);
                return _productRepository;
            }
        }

        public void Save()
        {
            db.SaveChanges();
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    db.Dispose();
                }
                this.disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
