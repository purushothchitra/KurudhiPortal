using KurudhiPortal.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
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
