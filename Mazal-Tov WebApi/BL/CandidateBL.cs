
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
                var user = UserBL.Register(candidate.User);
                candidate.Id = user.Id;
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
    }
}
