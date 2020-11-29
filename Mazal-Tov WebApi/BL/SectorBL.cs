using BL.Utils;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace BL
{
  public  class SectorBL
    {
        public static DAL.MazalTovEntities db = new DAL.MazalTovEntities();
        public static List<Sector> GetSector()
        {
            try
            {
                List<Sector> c = new List<Sector>();

                foreach (var item in db.sectors)
                {
                    var sectorDB = Converters.Convert(item);

                    c.Add(sectorDB);
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
