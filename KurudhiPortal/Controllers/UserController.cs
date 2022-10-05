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

        public IActionResult Logout()
        {
            return View();
        }
        public IActionResult Testing()
        {

            return View();
        }
        public IActionResult MyProfile()
        {
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
