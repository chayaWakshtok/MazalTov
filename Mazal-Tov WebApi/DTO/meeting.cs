using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class Meeting
    {
        public int Id { get; set; }
        public DateTime DateMeeting { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public string Place { get; set; }
        public TimeZone DuringTime { get; set; }
        public int NumMeeting { get; set; }
        public string Remark { get; set; }
        public int MatchingId { get; set; }

    }
}
