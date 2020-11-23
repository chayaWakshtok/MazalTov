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
        [HttpPost]
        [Route("token")]
        [AllowAnonymous]
        public User Token([FromBody]User user)
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
        [HttpPost]
        [Route("Register")]
        [AllowAnonymous]
        public User Register([FromBody]User value)
        {
            return UserBL.Register(value);
        }
        // POST: api/User

        //[HttpPost]
        //[Route("RegisterCandidate")]
        //[AllowAnonymous]
        //public Candidate RegisterCandidate([FromBody]Candidate value)
        //{
        //   // return UserBL.RegisterCandidate(value);
        //}

        // POST: api/User
        [HttpPost]
        [Route("RegisterMatchmaker")]
        [AllowAnonymous]
        public Matchmaker RegisterMatchmaker([FromBody]Matchmaker value)
        {
            return UserBL.RegisterMatchmaker(value);
        }
        // PUT: api/User/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/User/5
        public void Delete(int id)
        {
        }

       
        [HttpGet]
        [Route("City")]
        [AllowAnonymous]
        public List<City> Getcity()
        {

            return UserBL.GetCity();
        }

        [HttpGet]
        [Route("Sector")]
        [AllowAnonymous]
        public List<Sector> Getsector()
        {

            return UserBL.GetSector();
        }
        [HttpGet]
        [Route("Chasidut")]
        [AllowAnonymous]
        public List<Chasidut> GetChasidut()
        {

            return UserBL.Getchasidut();
        }

    }
}
