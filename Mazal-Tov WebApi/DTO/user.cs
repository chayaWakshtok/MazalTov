using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class User
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public string Password { get; set; }
        public string Tz { get; set; }
        public byte[] PasswordSalt { get; set; }
        public List<Role> Roles { get; set; }

    }
}
