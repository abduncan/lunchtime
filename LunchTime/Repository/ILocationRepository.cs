using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LunchTime.Repository
{
    public interface ILocationRepository
    {
        /// <summary>
        /// Get all locations suggested for today.
        /// </summary>
        /// <returns></returns>
        IEnumerable<Location> RetrieveLocations();

        /// <summary>
        /// Add a new location to eat at today.
        /// </summary>
        /// <param name="location"></param>
        bool AddLocation(Location location);

        /// <summary>
        /// Remove an existing location previously added for today.
        /// </summary>
        /// <param name="location"></param>
        void RemoveLocation(Location location);
    }
}
