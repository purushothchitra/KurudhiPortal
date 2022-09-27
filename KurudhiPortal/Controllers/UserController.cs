using Microsoft.AspNetCore.Mvc;

namespace KurudhiPortal.Controllers
{
    public class UserController : Controller
    {
        public IActionResult user()
        {
            return View();
        }
        public IActionResult MyProfile()
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
    }
}
