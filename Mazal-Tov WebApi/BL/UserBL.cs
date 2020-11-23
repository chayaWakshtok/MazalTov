using BL.Utils;
using DTO;
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
            var user = db.users.FirstOrDefault(p => p.Username == username );
            if (user == null)
            {
                return null;
            }
            else if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return null;
            }
            else
            {
                return Utils.Converters.Convert(user);
            }
        }

        public static User Register(User user)
        {
            try
            {
                CreatePasswordHash(user.Password, out byte[] passwordHash, out byte[] passwordSalt);
                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                var userDB = Converters.Convert(user);
                var userInter=db.users.Add(userDB);
                db.SaveChanges();
                return Converters.Convert(userInter);
            }
            catch (Exception ex)
            {
                return null;
            }
          
        }
        //public static Candidate RegisterCandidate(Candidate candidate)
        //{
        //    try
        //    {

        //        CreatePasswordHash(candidate.User.Password, out byte[] passwordHash, out byte[] passwordSalt);
        //        candidate.User.PasswordHash = passwordHash;
        //        candidate.User.PasswordSalt = passwordSalt;

        //        var candidateDB = Converters.Convert(candidate);
        //        var candidateInter = db.candidates.Add(candidateDB);
        //        db.SaveChanges();
        //        return Converters.Convert(candidateInter);
        //    }
        //    catch (Exception ex)
        //    {
        //        return null;
        //    }

        //}
        public static Matchmaker RegisterMatchmaker(Matchmaker matchmaker)
        {
            try
            {

                //CreatePasswordHash(matchmaker.User.Password, out byte[] passwordHash, out byte[] passwordSalt);
                //matchmaker.User.PasswordHash = passwordHash;
                //matchmaker.User.PasswordSalt = passwordSalt;
     
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

         

        private static bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                    {
                        return false;
                    }
                }
                return true;
            }
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }


        public static List<City> GetCity()
        {
            
                List<City> c = new List<City>();

                foreach (var item in db.cities)
                {
                var cityDB = Converters.Convert(item);
                
                c.Add(cityDB);
                }
                return c;
            }




        }
}
