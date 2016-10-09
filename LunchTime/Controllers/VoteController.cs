using LunchTime.Models;
using LunchTime.Repository;
using LunchTime.Repository.VoteRepository;
using LunchTime.Services;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace LunchTime.Controllers
{
    public class VoteController : Controller
    {
        private readonly ILocationRepository _repo;
        private readonly IVoteRepository _voteRep;
        private readonly IVoteCalculator _voteCalculator;

        public VoteController(ILocationRepository repo, IVoteRepository voteRep, IVoteCalculator voteCalculator)
        {
            _repo = repo;
            _voteRep = voteRep;
            _voteCalculator = voteCalculator;
        }

        // GET: Vote
        public ActionResult Index()
        {
            var model = GetModel();
            return View(model);
        }

        // POST: Vote/Create
        [HttpPost]
        public ActionResult CastVote(Models.VoteModel savemodel)
        {
            try
            {
                List<int> priorities = savemodel.Votes.Select(m => m.Priority).ToList();
                if (savemodel.Votes.Any(m => priorities.Count(p => p == m.Priority) != 1))
                {
                    // invalid
                    var model = GetModel();
                    model.VotesAreNotUnique = true;

                    return View("Index", model);
                }
                else
                {
                    SaveVoteModel model = new SaveVoteModel();
                    model.Email = savemodel.Email;
                    model.Votes = savemodel.Votes.Select(v => new Repository.VoteRepository.VoteModel()
                    {
                        Location = v.LocationName,
                        Priority = v.Priority
                    }).ToList();
                    _voteRep.SaveVote(model);
                }

                return RedirectToAction("Winner");
            }
            catch
            {
                return View();
            }
        }

        // GET: Vote/Edit/5
        public ActionResult Winner()
        {
            var voters = _voteRep.GetAllVotes();
            var winners = _voteCalculator.CalculateWinner(voters).ToList();
            var emails = voters.Select(v => v.Email).ToList();

            WinnerModel model = new WinnerModel();
            model.Locations = winners;
            model.VotersWhoHaveVoted = emails;

            return View(model);
        }


        private Models.VoteModel GetModel()
        {
            var dto = _repo.RetrieveLocations();
            var model = new Models.VoteModel();
            model.Votes = dto.Select(d => new Vote() { LocationName = d.Name }).ToList();
            model.MaxVote = dto.Count();
            return model;
        }
    }
}
