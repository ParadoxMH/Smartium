using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Smartium.Web.Data;
using Smartium.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Smartium.Web.Controllers
{
    [Route("api/house")]
    [ApiController]
    public class HouseController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public HouseController(ApplicationDbContext db)
        {
            _db = db;
        }
        // GET: api/house/getAll
        [HttpGet]
        [Route("getAll")]
        public IEnumerable<House> GetAll()
        {
            return _db.House;
        }
    }
}
