using LunchTime.Repository;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace LunchTime.Models
{
    public class VoteModel
    {
        [Required(ErrorMessage = "Don't be a becky...enter your email")]
        [EmailAddress]
        public string Email { get; set; }
        public List<Vote> Votes { get; set; }
        public int MinVote { get; set; }
        public int MaxVote { get; set; }

        public bool VotesAreNotUnique { get; set; }
    }
}