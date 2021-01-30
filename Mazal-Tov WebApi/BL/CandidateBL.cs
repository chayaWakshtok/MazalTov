
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