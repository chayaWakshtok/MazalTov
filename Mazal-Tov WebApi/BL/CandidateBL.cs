
using BL.Utils;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class CandidateBL
    {
        public static DAL.MazalTovEntities db = new DAL.MazalTovEntities();
        public static Candidate RegisterCandidate(Candidate candidate)
        {
            try
            {
                candidate.User.Roles = new List<Role>();
                var role = db.roles.First(p => p.Name == "User");
                var roleDto = Converters.Convert(role);
                candidate.User.Roles.Add(roleDto);
                var user = UserBL.Register(candidate.User);
                candidate.UserId = user.Id;
                candidate.CreateDate = DateTime.Now;
                candidate.UpdateDate = DateTime.Now;
                var candidateDB = Converters.Convert(candidate);
                var candidateInter = db.candidates.Add(candidateDB);

                db.SaveChanges();
                return Converters.Convert(candidateInter);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public static List<Candidate> GetAllCandidate()
        {
            List<DTO.Candidate> AllCandidate = new List<Candidate>();
            foreach (var item in db.candidates)
            {
                AllCandidate.Add(Converters.Convert(item));
            }
            return AllCandidate;
        }

        public static List<Candidate> CandidatesPersonalCare( int IdMatchmaker)
        {
            List<DTO.Candidate> AllCandidate = new List<Candidate>();
            List<DTO.Candidate> CandidatesPersonalCare = new List<Candidate>();

            foreach (var item in db.candidates) { 
            //{if(item.matchings.candidateid==)
                AllCandidate.Add(Converters.Convert(item));
            }


            foreach (var item in AllCandidate)
            {
                Random rnd = new Random();
            int num = rnd.Next(AllCandidate.Count);
            CandidatesPersonalCare.Add(AllCandidate[num]);
            AllCandidate[num].Status = 1;
            }
           
            return AllCandidate;
        }
        

        public static List<Candidate> GetAllSearchCandidate(Candidate candidate)
        {
            List<DTO.Candidate> list = new List<Candidate>();
            foreach (var item in db.candidates)
            {
                list.Add(Converters.Convert(item));
            }
            
            if (candidate.SectorId != null)
                list = list.Where(r => r.SectorId == candidate.SectorId).ToList();
            if (candidate.Gender != null)
                list = list.Where(r => r.Gender == candidate.Gender).ToList();
            if (candidate.Status != null)
                list = list.Where(r => r.Status == candidate.Status).ToList();
            if (candidate.Clothes != null)
                list = list.Where(r => r.Clothes == candidate.Clothes).ToList();
            if (candidate.MedicalProblem != null)
                list = list.Where(r => r.MedicalProblem == candidate.MedicalProblem).ToList();
            if (candidate.WhoMoneyAnother != null)
                list = list.Where(r => r.WhoMoneyAnother <= candidate.WhoMoneyAnother).ToList();
            if (candidate.WhoMoneyGive != null)
                list = list.Where(r => r.WhoMoneyGive <= candidate.WhoMoneyGive).ToList();
            if (candidate.Heigth != null)
                list = list.Where(r => r.Heigth <= candidate.Heigth).ToList();
             
            return list;
        }
    }

}




//if (candidate.CityId != null && SearchDate2 != null)
//    list = list.Where(r => r.Date.Value.Date >= SearchDate1.Date && r.Date.Value.Date <= SearchDate2.Date).ToList();
//if (SearchDate1 != null && SearchDate2 == null)
//    list = list.Where(r => r.Date >= SearchDate1).ToList();
//if (SearchDate2 != null && SearchDate1 == null)
//    list = list.Where(r => r.Date <= SearchDate2).ToList();