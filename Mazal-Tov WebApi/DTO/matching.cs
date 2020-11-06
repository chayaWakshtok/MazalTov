using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class Matching
    {
        public int Id { get; set; }
        public DateTime Createdate { get; set; }
        public string Remark { get; set; }
        public DateTime UpdateDate { get; set; }
        public int Status { get; set; }
        public int Level { get; set; }
        public string ReasonFail { get; set; }
        public int Precent { get; set; }
        public int CandidateFailId { get; set; }
        public string ReasonCandidateFail { get; set; }
        public string ReasonCandidateFeFail { get; set; }
        public int CandidateId { get; set; }
        public int CandidateFemaleId { get; set; }
        public int MatchmarkerId { get; set; }

    }
}
