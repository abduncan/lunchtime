using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LunchTime.Repository.VoteRepository
{
    public interface IVoteRepository
    {
        void SaveVote(SaveVoteModel model);

        List<VoteModel> RetrieveVotes(string email);

        List<SaveVoteModel> GetAllVotes();
    }
}
