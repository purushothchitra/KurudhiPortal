using Microsoft.AspNetCore.Mvc.Rendering;

namespace KurudhiPortal.Models
{
    public class BloodRequestViewModel
    {
        public string? PatientName { get; set; }
        public int? AdmissionId { get; set; }
        public int? Age { get; set; }
        public string? Gender { get; set; }
        public string? BloodType { get; set; }
        public string? BloodGroup { get; set; }
        public string? BloodUnits { get; set; }
        public string? MedicalStatus { get; set; }
        public string? DueDate { get; set; }
        public string? AttenderName { get; set; }
        public string? AttenderContact { get; set; }
        public string? HospitalName { get; set; }
        public string? HospitalAddress { get; set; }
        public string? District { get; set; }
        public string? Country { get; set; }
        public string? State { get; set; }
        public string? Location { get; set; }
    }
    public class LanguageViewModel
    {
        public string Language { get; set; }
        public List<SelectListItem> Languages { get; set; } = new List<SelectListItem>
        {
            new SelectListItem { Value = "CS", Text = "C#" },
            new SelectListItem { Value = "JS", Text = "JavaScript" },
            new SelectListItem { Value = "TS", Text = "TypeScript"  },
        };
    }
    public class CountryViewModel
    {
        public string country { get; set; }
        
    }

}
