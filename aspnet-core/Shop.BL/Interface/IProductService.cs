﻿using Shop.BL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.BL.Interface
{
    public interface IProductService
    {
        IEnumerable<ProductView> GetAll();
    }
}
