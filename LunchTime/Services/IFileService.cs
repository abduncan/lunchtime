using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LunchTime.Services
{
    public interface IFileService
    {
        /// <summary>
        /// Read all lines from a file and return the data.
        /// </summary>
        /// <param name="fullPath"></param>
        /// <returns></returns>
        string GetFile(string fullPath);

        void WriteFile(string fullPath, string content);
    }
}
