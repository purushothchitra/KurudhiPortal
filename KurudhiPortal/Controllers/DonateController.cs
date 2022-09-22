using Microsoft.AspNetCore.Mvc;

namespace KurudhiPortal.Controllers
{
    public class DonateController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
