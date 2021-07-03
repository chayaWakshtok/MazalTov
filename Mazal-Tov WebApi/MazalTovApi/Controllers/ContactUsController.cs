using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MazalTovApi.Controllers
{
    [RoutePrefix("api/ContactUs")]
    public class ContactUsController : ApiController
    {
        // GET: api/ContactUs
        [Route("GetAll")]
        public List<Contactus> GetAll()
        {
           return BL.ContactUsBL.GetContacts();
        }

        // GET: api/ContactUs/5
        [Route("GetByStatus/{status}")]
        public List<Contactus> Get(int status)
        {
            return BL.ContactUsBL.GetContactsStatus(status);
        }

        // POST: api/ContactUs
        [Route("AddContact")]
        public bool Post([FromBody]DTO.Contactus value)
        {
            return BL.ContactUsBL.AddContactUs(value);
        }

        // PUT: api/ContactUs/5
        [Route("Update")]
        public void Put([FromBody]Contactus value)
        {

        }

        // DELETE: api/ContactUs/5
        public void Delete(int id)
        {
        }
    }
}
