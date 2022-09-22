using Microsoft.AspNetCore.Mvc;

namespace KurudhiPortal.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult admin()
        {
            return View();
        }
    }
}
