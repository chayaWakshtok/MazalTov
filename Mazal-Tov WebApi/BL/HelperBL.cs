﻿ 
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
                var e = db.helpers.Where(m => m.worker.user.Id == userId);

                //foreach (var item in e)
                //{
                //    if (item.IsDelete == true)
                //    listMatchingHelper.Add(MatchingHelper.CourseConvertDTO(item));
                //}
                return listMatchingHelper;
            }
        
    }
}
