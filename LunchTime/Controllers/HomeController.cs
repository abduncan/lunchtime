using LunchTime.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LunchTime.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILocationRepository _repo;

        public HomeController(ILocationRepository repo)
        {
            _repo = repo;
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AddLocation()
        {
            var model = _repo.RetrieveLocations();
            return View(model);
        }

        [HttpPost]
        public ActionResult AddLocation(Location location)
        {
            _repo.AddLocation(location);
            var model = _repo.RetrieveLocations();
            model = SterilizeModel(model);

            return View(model);
        }

        public ActionResult RemoveLocation(Location location)
        {
            _repo.RemoveLocation(location);
            var model = _repo.RetrieveLocations();

            return View("AddLocation", model);
        }

        private IEnumerable<Location> SterilizeModel(IEnumerable<Location> model)
        {
            if (model == null) return new List<Location>();
            return model;
        }
    }
}