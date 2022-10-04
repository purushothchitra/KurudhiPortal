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

        public IActionResult SearchDonors()
        {
            return View();
        }

        public IActionResult Logout()
        {
            return View();
        }
        public IActionResult Testing()
        {

            return View();
        }
        public IActionResult MyProfile()
        {
            return View();
        }

    }
}
