using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class Matchmaker
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public string MedicalProblem { get; set; }
        public int ChasidutId { get; set; }
        public int NumMatching { get; set; }
        public int ChildrenMatchmaking { get; set; }
        public int HowSend { get; set; }
        public bool IsCommitment { get; set; }
        public bool IsAgreement { get; set; }
        public int Status { get; set; }
        public int CityId { get; set; }
        public int SectorId { get; set; }
        public int WorkerId { get; set; }

    }
}
