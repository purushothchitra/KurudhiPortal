using System.ComponentModel.DataAnnotations;

namespace KurudhiPortal.Models
{
    public enum Gender
    {
        Male,
        Female,
        Others
    }
    public enum BloodGroup
    {
        APositive,
        ANegative,
        BPositive,
        BNegative,
        ABPositive,
        ABNegative,
        OPositive,
        ONegative,

    }
    public enum MedicalStatus
    {
        Normal,
        Medium,
        Emergency
    }
    public enum Country
    {
        India
    }
    public enum State
    {
        TamilNadu,
        Kerla,
        Delhi,
        AndraPradesh,
    }
    public enum District
    {
        Ariyalur,
        Chengalpattu,
        Chennai,
        Coimbatore,
        Dharmapuri,
        Dindigul,
        Erode,
        Kallakurichi,
        Kancheepuram,
        Karur,
        Krishnagiri,
        Madurai
    }
    public enum Location
    {
        Thuraipakkam,
        Ecr,
        Tnagar,
        Adyar
    }
    public class LocationDetails
    {
        [EnumDataType(typeof(Gender))]
        public Location LocationType { get; set; }
    }

}
