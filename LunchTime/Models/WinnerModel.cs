using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LunchTime.Models
{
    public class WinnerModel
    {
        public List<string> Locations { get; set; }

        public List<string> VotersWhoHaveVoted { get; set; }
    }
}