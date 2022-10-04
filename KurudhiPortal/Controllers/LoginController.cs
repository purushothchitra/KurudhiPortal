using KurudhiPortal.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Diagnostics;

namespace KurudhiPortal.Controllers
{
    public class LoginController : Controller
    {
        private readonly ILogger<LoginController> _logger;

        public LoginController(ILogger<LoginController> logger)
        {
            _logger = logger;   
        }

        public IActionResult Index()
        {
            string path = @"c:/DataBase/login.json";
            string readText = System.IO.File.ReadAllText(path);
            JArray convert = JArray.Parse(readText);
            ViewData["responsedata"] = convert;
            return View();
        }

        public IActionResult SignIn(LoginViewModel userValidation)
        {
            return Json(new { status = "success", ex = "Model recieved" });
        }

        public IActionResult SignUp()
        {
            return View();
        }
        public IActionResult Register( )
        {
            return View();
        }

        public IActionResult AboutUs()
        {
            return View();
        }
        public IActionResult FeedBack()
        {
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }
        

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}