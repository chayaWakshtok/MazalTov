using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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
    }
}
