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
            //return View();
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
                "India"
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
    }
}
