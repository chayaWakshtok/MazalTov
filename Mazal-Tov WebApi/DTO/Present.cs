using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
 public   class Present
    {
        public int Id { get; set; }
        public DateTime EnterDate { get; set; }
        public DateTime ExitDate { get; set; }
        public string Remark { get; set; }
        public decimal NumHours { get; set; }
        public string Subject { get; set; }
        public int WorkerId { get; set; }

    }
}
