
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
                var role=db.roles.First(p => p.Name == "User");
                var roleDto= Converters.Convert(role);
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
    }
}
