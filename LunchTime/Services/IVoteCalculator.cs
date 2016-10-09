using LunchTime.Repository.VoteRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LunchTime.Services
{
    public interface IVoteCalculator
    {
        IEnumerable<string> CalculateWinner(IEnumerable<SaveVoteModel> voters);
    }
}
