using Microsoft.AspNetCore.Mvc;

namespace KurudhiPortal.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Admin()
        {
            return View();
        }
        public IActionResult SearchDonors()
        {
            return View();
        }
    }
}
