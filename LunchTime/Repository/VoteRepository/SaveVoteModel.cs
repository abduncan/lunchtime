using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LunchTime.Repository.VoteRepository
{
    public class SaveVoteModel
    {
        public string Email { get; set; }

        public List<VoteModel> Votes { get; set; } = new List<VoteModel>();
    }
}