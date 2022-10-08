namespace KurudhiPortal.Models
{
    public class LoginViewModel
    {
        public string? UserName { get; set; }
        public int? Password { get; set; }
    }
    public class SignUpViewModel
    {
        public string? UserName { get; set; }
        public int? Password { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Gender { get; set; }
        public int? Age { get; set; }
        public string? BloodGroup { get; set; }
        public string? Email { get; set; }
        public string? MobileNumber { get; set; }
        public string? Country { get; set; }
        public string? State { get; set; }
        public string? District { get; set; }
    }
    public class DropdownViewModel
    {
        public string? Country { get; set; }
    }
}
