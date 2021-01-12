 
using BL.Utils;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 


namespace BL
{
    public class HelperBL
    {
        public static DAL.MazalTovEntities db = new DAL.MazalTovEntities();
        public static Helper RegisterHelper(Helper helper)
        {
            try
            {
                var role = db.roles.First(p => p.Name == "Worker");
                var roleDto = Converters.Convert(role);
                helper.Worker.User.Roles.Add(roleDto);
                var user = UserBL.Register(helper.Worker.User);
                helper.Worker.UserId = user.Id;
                var helperDB = Converters.Convert(helper);
                var helperInter = db.helpers.Add(helperDB);
                db.SaveChanges();
                return Converters.Convert(helperInter);
            }
            catch (Exception ex)
            {
                return null;
            }

        }
        public static List<DTO.MatchingHelper> GetAllMatching(int userId)
        {
            List<MatchingHelper> listMatchingHelper = new List<MatchingHelper>();
 
            var helper = db.helpers.First(m => m.worker.UserId == userId);
            var matchinghelper = db.matchingHelpers.Where(m => m.HelperId == helper.Id);
            


            foreach (var item in matchinghelper)
            {
                var matchinghelperconvert = Converters.Convert(item);
                listMatchingHelper.Add(matchinghelperconvert);
            }
            return listMatchingHelper;
        }


        public static List<DTO.MatchingHelper> GetImportentMatching(int userId)
        {
            List<MatchingHelper> listImportentMatchingHelper = new List<MatchingHelper>();

            var helper = db.helpers.First(m => m.worker.UserId == userId);
            var matchinghelper = db.matchingHelpers.Where(m => m.HelperId == helper.Id);



            foreach (var item in matchinghelper)
            {
                var matchinghelperconvert = Converters.Convert(item);
                listImportentMatchingHelper.Add(matchinghelperconvert);
            }
        listImportentMatchingHelper.Sort((x, y) => y.UpdateDate.CompareTo(x.UpdateDate));

            return listImportentMatchingHelper;
        }

    } 
    }
 
