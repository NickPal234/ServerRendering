using Shop.BL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.BL.Interface
{
    public interface IPersonService
    {
        string Create(PersonView personView);
        PersonView GetPerson(string name, string password);
    }
}
