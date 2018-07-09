using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.DTO.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        T Get(string id);
        void Create(T entity);
        void Update(T entity);
        void Delete(string id);
    }
}
