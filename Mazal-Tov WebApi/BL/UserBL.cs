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
            var user = db.users.FirstOrDefault(p => p.Username == username);
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

        public static DTO.User GetInfoByUserName(string username)
        {
            var user = db.users.FirstOrDefault(p => p.Username == username);
            if (user == null)
            {
                return null;
            }
            else
            {
                return Utils.Converters.Convert(user);
            }
        }

        public static DTO.User GetInfoById(string id)
        {
            var intId = int.Parse(id);
            var user = db.users.FirstOrDefault(p => p.Id == intId);
            if (user == null)
            {
                return null;
            }
            else
            {
                return Utils.Converters.Convert(user);
            }
        }

        public static List<DTO.User> GetUserCommitment()
        {
            var usersDB = db.users.Where(p => p.IsOk == false).ToList();
            if (usersDB == null)
            {
                return new List<User>();
            }
            var users = Utils.Converters.Convert(usersDB);
            foreach (var item in users)
            {
                item.Password = "";
                item.PasswordSalt = null;
                item.PasswordHash = null;
                if (item.Roles.FirstOrDefault(p => p.Name == ERoles.MatchMarker.ToString()) != null)
                    item.UserType = UserType.matchmaker;
                else if(item.Roles.FirstOrDefault(p => p.Name == ERoles.Worker.ToString()) != null)
                    item.UserType = UserType.worker;
                else if (item.Roles.FirstOrDefault(p => p.Name == ERoles.Secretary.ToString()) != null)
                    item.UserType = UserType.secretary;
            }
            return users;
        }

        public static User Register(User user)
        {
            try
            {
                CreatePasswordHash(user.Password, out byte[] passwordHash, out byte[] passwordSalt);
                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                user.CreationDate = DateTime.Now;
                var userDB = Converters.Convert(user);
                var role = db.roles.Find(userDB.roles.FirstOrDefault().Id);
                userDB.roles = new List<DAL.role>();
                userDB.roles.Add(role);
                var userInter = db.users.Add(userDB);
                db.SaveChanges();
                return Converters.Convert(userInter);
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





    }
}
