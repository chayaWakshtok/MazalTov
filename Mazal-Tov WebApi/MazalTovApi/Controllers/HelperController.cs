using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace MazalTovApi.Controllers
{
    [RoutePrefix("api/Helper")]
    public class HelperController : ApiController
    {
        [HttpPost]
        [Route("RegisterHelper")]
        [AllowAnonymous]
        public Helper RegisterMatchmaker([FromBody] Helper helper)
        {
            return HelperBL.RegisterHelper(helper);
        }

<<<<<<< HEAD
        //[HttpGet]
        //[Authorize(Roles = "Worker")]
        //[Route("GetMatchingHelper")]
=======
        [HttpGet]
        [Authorize(Roles = "Worker,Admin")]
        [Route("GetMatchingHelper")]
>>>>>>> 7dfe90d7e957da7299624686156841a4dfd1bbc8
  
        //public List<DTO.MatchingHelper> GetAllMatchingHelper()
        //{
        //    var identity = (ClaimsIdentity)User.Identity;
        //    return HelperBL.GetAllMatching(int.Parse( identity.Name));
        //}

        [HttpGet]
       
        [Route("GetMatchingHelper/{id}")]

        public List<DTO.MatchingHelper> GetAllMatchingHelper( int id)
        {
             
            return HelperBL.GetAllMatching(id);
        }

    }
}
