using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace Mazal_Tov.Controllers
{
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        //[Authorize(Roles = "Manager")]
        [Authorize]
        [Route("GetInfo")]
        public User GetInfo()
        {
            var identity = (ClaimsIdentity)User.Identity;
            return BL.UserBL.GetInfoById(identity.Name);
        }


        // GET: api/User
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/User/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/User
        [HttpPost]
        [Route("Register")]
        [AllowAnonymous]
        public User Register([FromBody]User value)
        {
            return UserBL.Register(value);
        }


        // PUT: api/User/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/User/5
        public void Delete(int id)
        {
        }

    }
}
