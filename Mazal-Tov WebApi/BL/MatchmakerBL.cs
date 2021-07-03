
using BL.Utils;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
   public class MatchmakerBL
    {
        public static DAL.MazalTovEntities db = new DAL.MazalTovEntities();
        public static Matchmaker RegisterMatchmaker(Matchmaker matchmaker)
        {
            try
            {
                var role = db.roles.First(p => p.Name == "MatchMarker");
                var roleDto = Converters.Convert(role);
                matchmaker.Worker.User.Roles = new List<Role>();
                matchmaker.Worker.User.Roles.Add(roleDto);
                var user = UserBL.Register(matchmaker.Worker.User);
                matchmaker.Worker.UserId = user.Id;
                matchmaker.Worker.User = null;
                matchmaker.Worker.CreateDate = DateTime.Now;
                matchmaker.Worker.UpdateDate = DateTime.Now;
                var matchmakerDB = Converters.Convert(matchmaker);
                matchmakerDB.worker.bank = null;
                matchmakerDB.worker.BankId = null;
                var matchmakerInter = db.matchmakers.Add(matchmakerDB);
                db.SaveChanges();
                return Converters.Convert(matchmakerInter);
            }
            catch (Exception ex)
            {
                return null;
            }

        }



    }
}
