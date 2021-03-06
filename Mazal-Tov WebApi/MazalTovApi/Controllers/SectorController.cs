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
    [RoutePrefix("api/Sector")]
    public class SectorController : ApiController
    {
        [HttpGet]
        [Route("GetSector")]
        [AllowAnonymous]
        public List<Sector> Getsector()
        {
            return SectorBL.GetSector();
        }
    }
}
