using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Smartium.Web.Common;
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
    [Authorize(Roles = Constants.Roles.All)]
    public class HouseController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public HouseController(ApplicationDbContext db, RoleManager<IdentityRole> roleManager, UserManager<ApplicationUser> userManager)
        {
            //var a = roleManager.RoleExistsAsync("SuperAdmin");
            //var user = await userManager.GetUserAsync(principal: HttpContext.User);
            //var a = userManager.IsInRoleAsync(userManager.GetUserAsync(), "Admin");
            _db = db;
        }
        // GET: api/house/getAll
      //  [Authorize(Roles = Constants.Roles.Admins)]
       // [Authorize(Roles = "SuperAdmin")]
        [HttpGet]
        [Route("getAll")]
        public IEnumerable<House> GetAll()
        {
            return _db.House;
        }
        // GET: api/house/getAllByUserId
        //[Authorize(Roles = Constants.Roles.All)]
        [HttpGet]
        [Route("getAllByUserId")]
        public IEnumerable<House> GetAllByUserId()
        {
            return _db.House;
        }
    }
}
