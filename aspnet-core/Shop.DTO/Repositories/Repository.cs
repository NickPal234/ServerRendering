using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Shop.DTO.EF;
using Shop.DTO.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Shop.DTO.Repositories
{
    public class Repository<T> : IRepository<T> where T : class/*,  IBaseEntity*/
    {
        private DbSet<T> _entities;

        DataContext _context;
        public Repository(DataContext context)
        {
            _context = context;
        }

        public void Create(T entity)
        {
            var model = Entities.Add(entity);
            _context.SaveChanges();
        }

        public void Delete(string id)
        {
            var model = Entities.Find(id);
            Entities.Remove(model);
        }

        public T Get(string id)
        {
            var model = Entities.Find(id);
            return model;
        }

        public IEnumerable<T> GetAll()
        {
            return Entities.ToList();
        }

        public void Update(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            _context.SaveChanges();
        }

        protected virtual DbSet<T> Entities
        {
            get
            {
                if (_entities == null)
                    _entities = _context.Set<T>();
                return _entities;
            }
        }
    }
}
