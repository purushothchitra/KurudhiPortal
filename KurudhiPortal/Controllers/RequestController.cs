using Microsoft.AspNetCore.Mvc;

namespace KurudhiPortal.Controllers
{
    public class RequestController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult BloodRequest()
        {
            return View();
        }
        public IActionResult NewBloodRequest()
        {
            return View();
        }
    }
}
