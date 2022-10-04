using KurudhiPortal.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace KurudhiPortal.Controllers
{
    public class RequestController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult BloodRequest(BloodRequestViewModel newBloodRequest)
        {
            //return View();
            return Json(new { status = "success", ex = "Model recieved" });
        }
        public IActionResult NewBloodRequest()
        {
            return View();
        }
    }
}
