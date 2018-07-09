using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shop.BL.Interface;


namespace Shop.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Values")]
    public class ValuesController : ControllerBase
    {


    }
    [Produces("application/json")]
    [Route("api/Product")]
    public class Product : Controller
    {
        IProductService _productService;
        public Product(IProductService productService)
        {
            _productService = productService;
        }


        [HttpGet]
        [Route("GetProductList")]
        public IActionResult JustAction()
        {
            return Ok(_productService.GetAll());
        }

        [HttpGet]
        [Authorize]
        [Route("GetProducts")]
        public IActionResult GetProducts()
        {
            return Ok(_productService.GetAll());
        }
    }
}