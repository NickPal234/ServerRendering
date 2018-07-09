using Shop.DTO.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.DTO.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<Person> Persons { get; }
        IRepository<Product> Products { get; }
        void Save();
    }
}
