
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
                matchmaker.User.Roles.Add(roleDto);
                var user = UserBL.Register(matchmaker.User);
                matchmaker.Id = user.Id;
                var matchmakerDB = Converters.Convert(matchmaker);
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
