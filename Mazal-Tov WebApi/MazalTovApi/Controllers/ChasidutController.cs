﻿using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MazalTovApi.Controllers
{
    [RoutePrefix("api/Chasidut")]
    [AllowAnonymous]
    public class ChasidutController : ApiController
    {
        [HttpGet]
        [Route("GetChasidut")]
        [AllowAnonymous]
        public List<Chasidut> GetChasidut()
        {
            return ChasidutBL.Getchasidut();
        }
    }
}
