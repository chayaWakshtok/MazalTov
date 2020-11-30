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
    [RoutePrefix("api/Matchmaker")]
    public class MatchmakerController : ApiController
    {
        [HttpPost]
        [Route("RegisterMatchmaker")]
        [AllowAnonymous]
        public Matchmaker RegisterMatchmaker([FromBody] Matchmaker value)
        {
            return MatchmakerBL.RegisterMatchmaker(value);
        }
    }
}
