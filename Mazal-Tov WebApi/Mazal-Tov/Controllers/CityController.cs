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
    [RoutePrefix("api/City")]
    public class CityController : ApiController
    {
        [HttpGet]
        [Route("City")]
        [AllowAnonymous]
        public List<City> Getcity()
        {

            return CityBL.GetCity();
        }
    }
}
