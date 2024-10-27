using Microsoft.AspNetCore.Mvc;
using WebApplication1.Service;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class ShoeController(IShoeService _shoeService) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAllShoe()
        {
            return Ok(await _shoeService.GetAllShoeAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetShoeById(Guid id)
        {
            return Ok(await _shoeService.GetShoeById(id));
        }

    }
}
