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
    [RoutePrefix("api/Candidate")]
    public class CandidateController : ApiController
    {
        [HttpPost]
        [Route("RegisterCandidate")]
        [AllowAnonymous]
        public Candidate RegisterCandidate([FromBody] Candidate value)
        {
            return CandidateBL.RegisterCandidate(value);
        }

        [HttpGet]
        [Route("GetAllCandidate")]
        public List<DTO.Candidate> GetAllCandidate()
        {

            return CandidateBL.GetAllCandidate();
        }






























                                   
    }
}
