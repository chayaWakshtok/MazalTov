using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    class Halachot
    {
        public int  Id { get; set; }
        public string Halacha { get; set; }
        public string Name { get; set; }
        public string Subject { get; set; }
        public int Category { get; set; }
        public bool IsOk { get; set; }
        public bool IsTaken { get; set; }
        public int UserId { get; set; }
     

    }
}
