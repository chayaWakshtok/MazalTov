using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Mazal_Tov.Controllers
{
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        [Route("token")]
        [AllowAnonymous]
        public User Register([FromBody]User user)
        {
            return UserBL.Login(user.Username,user.Password);
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
