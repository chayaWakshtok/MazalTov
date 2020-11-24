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
    [RoutePrefix("api/Helper")]
    public class HelperController : ApiController
    {  
        // POST: api/Helper
        [HttpPost]
        [Route("RegisterHelper")]
        [AllowAnonymous]
        public Helper RegisterMatchmaker([FromBody]Helper value)
        {
            return UserBL.RegisterHelper(value);
        }
    }
}
