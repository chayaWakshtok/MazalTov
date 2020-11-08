using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class UserBL
    {
        public static DAL.MazalTovEntities db = new DAL.MazalTovEntities();
        public static DTO.User Login(string username, string password)
        {
            var user = db.users.FirstOrDefault(p => p.Username == username && p.Password == password);
            if (user != null)
                return Utils.Converters.Convert(user);
            else return null;
        }
    }
}
