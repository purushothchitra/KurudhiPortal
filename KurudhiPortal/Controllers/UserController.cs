using KurudhiPortal.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace KurudhiPortal.Controllers
{
    public class UserController : Controller
    {
        public new IActionResult User( )
        {
            return View();
        }
        public IActionResult _MyProfile()
        {
            return View();
        }
        public IActionResult SearchDonors(UserViewModel userDetails)
        {
            
            return Json(new { status = "success", ex = "Model recieved" });
        }
        public IActionResult Logout()
        {
            return View();
        }
        public IActionResult Testing()
        {
            return View();
        }
    }
}
