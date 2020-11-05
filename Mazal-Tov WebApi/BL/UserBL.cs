using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class UserBL
    {
        public static void Login()
        {
           var u= Utils.Converters.Convert(new DAL.user());
        }
    }
}
