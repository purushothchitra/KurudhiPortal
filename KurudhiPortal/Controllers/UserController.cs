using Microsoft.AspNetCore.Mvc;

namespace KurudhiPortal.Controllers
{
    public class UserController : Controller
    {
        public IActionResult user()
        {
            return View();
        }
    }
}
