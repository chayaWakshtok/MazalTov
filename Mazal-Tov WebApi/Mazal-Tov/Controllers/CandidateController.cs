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
    [RoutePrefix("api/Candidate")]
    public class CandidateController : ApiController
    {

        //POST: api/Candidate

        [HttpPost]
       [Route("RegisterCandidate")]
       [AllowAnonymous]
        //public Candidate RegisterCandidate([FromBody]Candidate value)
        //{
        //      //return CandidateBL.RegisterCandidate(value);
        //}

    }
}
