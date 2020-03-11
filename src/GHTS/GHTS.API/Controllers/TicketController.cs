using GHTS.DTO;
using Microsoft.AspNetCore.Mvc;

namespace GHTS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        [HttpGet("getticket/{id}")]
        public TicketDTO GetTicket(int id)
        {
            return new TicketDTO();
        }
    }
}