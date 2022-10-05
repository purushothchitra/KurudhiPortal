namespace KurudhiPortal.Models
{
    public class LoginViewModel
    {
        public string? UserName { get; set; }
        public int? Password { get; set; }
    }
    public class SignUpViewModel
    {
        public string? userName { get; set; }
        public int? password { get; set; }
        public int? firstName { get; set; }
        public int? lastName { get; set; }
        public int? Gender { get; set; }
        public int? age { get; set; }
        public int? bloodGroup { get; set; }
        public int? email { get; set; }
        public int? mobileNumber { get; set; }

        public int? country { get; set; }
        public int? state { get; set; }
        public int? district { get; set; }
    }
}
