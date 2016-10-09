using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace LunchTime.Services
{
    public class FileService : IFileService
    {
        public string GetFile(string fullPath)
        {
            if (File.Exists(fullPath))
            {
                return File.ReadAllText(fullPath);
            }
            return string.Empty;
        }

        public void WriteFile(string fullPath, string content)
        {
            File.WriteAllText(fullPath, content);
        }
    }
}