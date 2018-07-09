using Shop.BL.Interface;
using Shop.BL.Map;
using Shop.BL.Models;
using Shop.DTO.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Shop.BL.Services
{
    public class PersonService : IPersonService
    {
        IUnitOfWork _unitOfWork;
        public PersonService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public string Create(PersonView personView)
        {
            var userList = _unitOfWork.Persons.GetAll();
            var str =  userList.Where(x=>x.Login==personView.Login);
            if (str.Count()>0)
            {
                return "Account with this nickname has already been created";
            }
            str = userList.Where(x => x.Email == personView.Email);
            if (str.Count() > 0)
            {
                return "Account with this email has already been created";
            }
            personView.Role = "User";
            _unitOfWork.Persons.Create(CustomMap.GetPerson(personView));
            return "Account was successfully created";
        }

        public PersonView GetPerson(string name, string password)
        {
            var userList = _unitOfWork.Persons.GetAll();
            var user = userList.FirstOrDefault(x => x.Login == name && x.Password == password);
            return CustomMap.GetPersonView(user);
        }
    }
}
