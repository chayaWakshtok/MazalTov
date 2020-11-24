
using BL.Utils;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace BL
{
     public class CityBL
    {
        public static DAL.MazalTovEntities db = new DAL.MazalTovEntities();
        public static List<City> GetCity()
        {
            try
            {
                List<City> c = new List<City>();

                foreach (var item in db.cities)
                {
                    var cityDB = Converters.Convert(item);

                    c.Add(cityDB);
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
