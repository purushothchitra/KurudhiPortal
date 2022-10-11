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
            return View();
        }
        public IActionResult SignIn(LoginViewModel userValidation)
        {
            return Json(new { status = "success", ex = "Model recieved" });
        }
        public IActionResult SignUp()
        {
            var district = new List<string>
            {

                "Ariyalur",
                "Chengalpattu",
                "Chennai",
                "Coimbatore",
                "Cuddalore",
                "Dharmapuri",
                "Dindigul",
                "Erode",
                "Kallakurichi",
                "Kancheepuram",
                "Karur",
                "Krishnagiri",
                "Madurai"
            };
            ViewBag.district = district;
            var state = new List<string>
            {
                "TamilNadu",
                "Kerla",
                "Delhi",
                "AndraPradesh"
            };
            ViewBag.state = state;

            var location = new List<string>
            {
                "Thuraipakkam",
                "Ecr",
                "Tnagar",
                "Adyar"
            };
            ViewBag.location = location;
            var medicalstatus = new List<string>
            {
                "Normal",
                "Medium",
                "Emergency"
            };
            ViewBag.medicalstatus = medicalstatus;

            var country = new List<string>
            {
                "India",
                "Usa"
            };
            ViewBag.country = country;

            var bloodgroup = new List<string>
            {
                "a+",
                "b+",
                "ab+",
                "ab-",
                "o+",
                "o-"

            };
            ViewBag.bloodgroup = bloodgroup;

            var gender = new List<string>
            {
                "Male",
                "Female",
                "Other"
            };
            ViewBag.gender = gender;

            return View();
        }
        public IActionResult Register(SignUpViewModel userDetails)
        {
            return Json(new { status = "success", message = "Model recieved" });
        }

        public IActionResult AboutUs()
        {
            return View();
        }
        public IActionResult Logout()
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
        public IActionResult Forgot()
        {
            return View();
        }
        public JsonResult GetStateByCountry(string country)
        {
            var locationDetails = GetLocationInfo();

            return Json(new { status = "success", message = "Model recieved" });
        }

        public List<LocationModel> GetLocationInfo()
        {
            List<LocationModel> locationInfo = new List<LocationModel>() {
                new LocationModel()
                {
                   
                },
            };

            return locationInfo;
        }
    }


    //[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    //public IActionResult Error()
    //{
    //    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    //}
}
