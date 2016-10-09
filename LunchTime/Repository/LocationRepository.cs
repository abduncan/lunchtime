using LunchTime.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Hosting;
using System.Web.Script.Serialization;

namespace LunchTime.Repository
{
    public class LocationRepository : ILocationRepository
    {
        private static object lockObject = new object();

        private readonly IFileService _fileService;
        public LocationRepository(IFileService fileService)
        {
            _fileService = fileService;
        }

        public bool AddLocation(Location location)
        {
            var locations = RetrieveLocations().ToList();

            if(locations.Any(l => String.Compare(l.Name, location.Name, true) == 0))
            {
                return false;
            }

            locations.Add(location);

            SaveLocations(locations);

            return true;
        }

        public void RemoveLocation(Location location)
        {
            var locations = RetrieveLocations().ToList();

            locations.RemoveAll(l => String.Compare(l.Name, location.Name, true) == 0);

            SaveLocations(locations);
        }

        public IEnumerable<Location> RetrieveLocations()
        {
            string filename = GetRepositoryFileName();
            string fileContent = _fileService.GetFile(filename);

            if (String.IsNullOrWhiteSpace(fileContent)) return new List<Location>();

            return new JavaScriptSerializer().Deserialize<IEnumerable<Location>>(fileContent);
        }

        private string GetRepositoryFileName()
        {
            var date = DateTime.Today;
            string fileLocation = HostingEnvironment.MapPath("~/App_Data");
            string filename = String.Format("{0}\\location_{1}.json", fileLocation, date.ToString("MM_dd_yy"));
            return filename;
        }

        private void SaveLocations(IEnumerable<Location> locations)
        {
            lock (lockObject)
            {
                string filename = GetRepositoryFileName();
                string json = new JavaScriptSerializer().Serialize(locations);
                _fileService.WriteFile(filename, json);
            }
        }
    }
}