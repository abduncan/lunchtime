using LunchTime.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using System.Web.Script.Serialization;

namespace LunchTime.Repository.VoteRepository
{
    public class VoteRepository : IVoteRepository
    {
        private static readonly object lockObject = new object();

        private readonly IFileService _fileService;
        public VoteRepository(IFileService fileService)
        {
            _fileService = fileService;
        }

        public List<VoteModel> RetrieveVotes(string email)
        {
            var models = GetAllVotes();
            var model = models.SingleOrDefault(m => string.Compare(m.Email, email, true) == 0);

            if (model == null) return new List<VoteModel>();

            return model.Votes;
        }

        public void SaveVote(SaveVoteModel model)
        {
            var models = GetAllVotes();
            int index = models.FindIndex( m => string.Compare(m.Email, model.Email, true) == 0);

            if (index == -1)
                models.Add(model);
            else
                models[index] = model;

            SaveVotes(models);
        }

        private string GetRepositoryFileName()
        {
            var date = DateTime.Today;
            string fileLocation = HostingEnvironment.MapPath("~/App_Data");
            string filename = String.Format("{0}\\votes_{1}.json", fileLocation, date.ToString("MM_dd_yy"));
            return filename;
        }

        private void SaveVotes(IEnumerable<SaveVoteModel> votes)
        {
            lock (lockObject)
            {
                string filename = GetRepositoryFileName();
                string json = new JavaScriptSerializer().Serialize(votes);
                _fileService.WriteFile(filename, json);
            }
        }

        private List<SaveVoteModel> GetAllVotes()
        {
            string filename = GetRepositoryFileName();
            string fileContent = _fileService.GetFile(filename);

            if (String.IsNullOrWhiteSpace(fileContent)) return new List<SaveVoteModel>();

            return new JavaScriptSerializer().Deserialize<List<SaveVoteModel>>(fileContent);
        }

        List<SaveVoteModel> IVoteRepository.GetAllVotes()
        {
            return GetAllVotes();
        }
    }
}