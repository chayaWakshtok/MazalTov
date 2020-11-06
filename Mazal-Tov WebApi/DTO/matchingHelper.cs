using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class MatchingHelper
    {

        public int Id { get; set; }
        public string Question { get; set; }

        public string Remark { get; set; }
        public DateTime CreateDate { get; set; }
        public int Status { get; set; }
        public DateTime UpdateDate { get; set; }
        public bool IsPaid { get; set; }
        public float NumHour { get; set; }
        public int Level { get; set; }
        public int Type { get; set; }

        public int MatchingId { get; set; }
        public int MatchmrkerId { get; set; }
        public int HelperId { get; set; }

    }
}
