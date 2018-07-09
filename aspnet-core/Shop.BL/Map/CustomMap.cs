using AutoMapper;
using Shop.BL.Models;
using Shop.DTO.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.BL.Map
{
    public class CustomMap
    {
        private CustomMap()
        {

        }
        static CustomMap()
        {
            Mapper.Initialize(p =>
            {
                p.CreateMap<Person, PersonView>();

                p.CreateMap<Product, ProductView>();


                p.CreateMap<PersonView, Person>();

                p.CreateMap<ProductView, Product>();

            });



        }
        public static PersonView GetPersonView(Person data)
        {
            return Mapper.Map<Person, PersonView>(data);
        }
        public static Person GetPerson(PersonView data)
        {
            return Mapper.Map<PersonView, Person>(data);
        }


        public static ProductView GetProductView(Product data)
        {
            return Mapper.Map<Product, ProductView>(data);
        }

    }

}