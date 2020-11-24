 
using BL.Utils;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    class HelperBL
    {
        public static DAL.MazalTovEntities db = new DAL.MazalTovEntities();
        public static Helper RegisterHelper(Helper helper)
        {
            try
            {

                var user = UserBL.Register(helper);
                helper.Id = user.Id;
                var helperDB = Converters.Convert(helper);
                var matchmakerInter = db.matchmakers.Add(helperDB);
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
