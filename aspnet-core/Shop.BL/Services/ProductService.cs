using Shop.BL.Interface;
using Shop.BL.Map;
using Shop.BL.Models;
using Shop.DTO.Entities;
using Shop.DTO.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Shop.BL.Services
{
    public class ProductService : IProductService
    {
        IUnitOfWork _unitOfWork;
        public ProductService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;

        }

        public IEnumerable<ProductView> GetAll()
        {
            return _unitOfWork.Products.GetAll().Select(x=>CustomMap.GetProductView(x));
        }

    }
}
