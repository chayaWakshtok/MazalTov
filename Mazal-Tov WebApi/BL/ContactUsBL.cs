using BL.Utils;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class ContactUsBL
    {
        public static DAL.MazalTovEntities db = new DAL.MazalTovEntities();
        public static List<Contactus> GetContacts()
        {
            try
            {
                return Converters.Convert(db.contactus.OrderBy(p => p.UpdateDate).ToList());
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public static List<Contactus> GetContactsStatus(int status)
        {
            try
            {
                return Converters.Convert(db.contactus.Where(p => p.Status == status).OrderBy(p => p.UpdateDate).ToList());
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public static bool AddContactUs(Contactus contactus)
        {
            try
            {
                DAL.contactu c = Converters.Convert(contactus);
                c.CreateDate = DateTime.Now;
                c.UpdateDate = DateTime.Now;
                c.user = null;
                db.contactus.Add(c);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
          
        }

        public static bool UpdateContactUs(Contactus contactus)
        {
            try
            {
                var c = db.contactus.FirstOrDefault(p => p.Id == contactus.Id);
                if (c == null)
                    return false;
                c.UpdateDate = DateTime.Now;
                c.user = db.users.Find(contactus.UserId);
                c.Status = contactus.Status;
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }

        }
    }
}
