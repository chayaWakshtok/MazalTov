using BL.Utils;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace BL
{
  
    public  class ChasidutBL
    {
        public static DAL.MazalTovEntities db = new DAL.MazalTovEntities();
        public static List<Chasidut> Getchasidut()
        {
            try
            {
                List<Chasidut> c = new List<Chasidut>();


                foreach (var item in db.chasiduts)
                {
                    var chasidutDB = Converters.Convert(item);

                    c.Add(chasidutDB);
                }
                return c;

            }
            catch (Exception ex)
            {
                return null;
            }
        }


    }
}
