using Microsoft.AspNetCore.Mvc;

namespace KurudhiPortal.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
       
        public IActionResult MyDashBoard()
        {
            return View();
        }
    }
}
