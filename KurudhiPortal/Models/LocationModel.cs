namespace KurudhiPortal.Models
{
    public class LocationModel
    {
        public List<CountryModel> Country { get; set; }
        public int SelectedCountry { get; set; }
        public int SelectedState { get; set; }
        public int SelectedDistrict { get; set; }
        public int SelectedLocation { get; set; }
    }

    public class CountryModel
    {
        public List<StateModel> Countries { get; set; }
    }
    public class StateModel
    {
        public List<DistrictModel> States { get; set; }
    }

    public class DistrictModel
    {
        public List<Locations> Districts { get; set; }
    }

    public class Locations
    {
        public string Location { get; set; }
    }
}
