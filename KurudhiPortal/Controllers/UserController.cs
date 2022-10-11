using KurudhiPortal.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace KurudhiPortal.Controllers
{
    public class UserController : Controller
    {
        public new IActionResult User( )
        {
           return View();
        }

        public IActionResult SearchDonors()
        {
            return View();
        }
        public IActionResult Testing()
        {

            return View();
        }
        public IActionResult MyProfile()
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

            ProfileViewModel profile = new ProfileViewModel();
            profile.UserName = "Purushothaman";
            profile.Password = "12345678";
            profile.FirstName = "Purushoth";
            profile.Lastname = "Venkatesan";
            profile.Gender = "Male";
            profile.Age = "21";
            profile.BloodGroup = "A+";
            profile.Email = "purushothchithra1103@gmail.com";
            profile.MobileNumber = "7904460054";
            profile.Country = "India";
            profile.State = "Tamil Nadu";
            profile.District = "Chennai";
            profile.LastDonatedDate = "05/10/22";
            return View(profile);
        }

    }
}
