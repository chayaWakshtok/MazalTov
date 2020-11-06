using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class CandidateComment
    {
        public int id { get; set; }
        public string Remark { get; set; }
        public bool Privileged { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int WriteUserId { get; set; }
        public int CandidateId { get; set; }

    }
}
