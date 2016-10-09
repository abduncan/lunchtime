using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using LunchTime.Repository.VoteRepository;

namespace LunchTime.Services
{
    public class VoteCalculator : IVoteCalculator
    {
        public IEnumerable<string> CalculateWinner(IEnumerable<SaveVoteModel> voters)
        {
            Dictionary<string, int> totalVotes = new Dictionary<string, int>();

            foreach (var voter in voters)
            {
                foreach (var vote in voter.Votes)
                {
                    if (!totalVotes.ContainsKey(vote.Location))
                        totalVotes.Add(vote.Location, vote.Priority);
                    else
                        totalVotes[vote.Location] += vote.Priority;
                }
            }

            int minimumVote = totalVotes.Min(v => v.Value);
            return totalVotes.Where(v => v.Value == minimumVote).Select(v => v.Key);
        }
    }
}