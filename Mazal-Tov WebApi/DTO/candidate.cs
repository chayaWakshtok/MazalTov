using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Candidate
    {
        public int Id { get; set; }
        public DateTime BornDate { get; set; }
        public int Status { get; set; }
        public bool IsPayFood { get; set; }
        public int Gender { get; set; }
        public string Address { get; set; }
        public string MedicalProblem { get; set; }
        public string NameFather { get; set; }
        public string NameMother { get; set; }
        public string FamilyMother { get; set; }
        public int NumChildren { get; set; }
        public int NumMarried { get; set; }
        public int NumMatching { get; set; }
        public string FatherWork { get; set; }
        public string MotherWork { get; set; }
        public string CandidateWork { get; set; }
        public int LastPlaceLearn { get; set; }
        public string Show { get; set; }
        public string Clothes { get; set; }
        public string Tell { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string Email { get; set; }
        public string Remark { get; set; }
        public int EnterBy { get; set; }
        public int UserId { get; set; }
        public int CityId { get; set; }
        public int IsOk { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int SumPay { get; set; }
        public int MatchmarkerId { get; set; }
        public int SectorId { get; set; }
        public int ChasidutId { get; set; }
        public int ChasidutMother { get; set; }
        public int ChasidutFather { get; set; }
        public bool IsCube { get; set; }
        public int ReasonCube { get; set; }
        public string ReasonCubeA { get; set; }
        public string TellMother { get; set; }
        public string TellFather { get; set; }
        public string KeepOn { get; set; }
        public int WhoMoneyAnother { get; set; }
        public int WhoMoneyGive { get; set; }
        public double Heigth { get; set; }
        public string MedicalProblemRemark { get; set; }
        public int EntryByUser { get; set; }
        public string RemarkSecure { get; set; }
        //public  List<req> requests { get; set; }
        //public virtual List<request> requests1 { get; set; }
        //public  List<image> images { get; set; }
        public User User { get; set; }
        public  User user1 { get; set; }
        //public  city city { get; set; }
        public List<Married> Marrieds { get; set; }
        public Sector Sector { get; set; }
        public Chasidut Chasidut { get; set; }
        //public  chasidut chasidut1 { get; set; }
        //public virtual chasidut chasidut2 { get; set; }
        public List<CandidateComment> CandidateComments { get; set; }
        public List<InfoCandidate> InfoCandidates { get; set; }
        public List<Matching> Matchings { get; set; }
        public List<Matching> Matchings1 { get; set; }
        public Matchmaker Matchmaker { get; set; }
        public List<CandidateFamily> CandidateFamilies { get; set; }



    }
}
