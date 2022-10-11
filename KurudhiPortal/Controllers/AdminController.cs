using KurudhiPortal.Models;
using Microsoft.AspNetCore.Mvc;

namespace KurudhiPortal.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Admin()
        {
            return View();
        }
        public IActionResult ManageUsers(string country)
        {
            return View();
        }
        public IActionResult ImportUsers()
        {
            return View();
        }
        public IActionResult SearchAdmins()
        {
            return View();
        }
        public IActionResult AddUsers()
        {
            return View();
        }
        public IActionResult AddAdmin( )
        {
            return View();
        }
        public IActionResult SearchDonors()
        {
            var model = new LanguageViewModel();
            return View(model);
            //return View();
        }

    }
}
