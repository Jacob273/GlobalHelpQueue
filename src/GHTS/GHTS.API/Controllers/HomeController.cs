using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GHTS.API.Controllers
{
    [Route("api")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [Route("")]
        public IActionResult Home()
        {
            return Ok("GHTS.Api");
        }
    }
}