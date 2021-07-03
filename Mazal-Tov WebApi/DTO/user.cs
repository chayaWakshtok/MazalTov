using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public enum UserType { secretary = 1, worker, candidate, matchmaker }
    public enum ERoles { Admin, Secretary, Worker, MatchMarker }
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
        public UserType UserType { get; set; }
        public bool IsOk { get; set; }
        public int Classification { get; set; }
        public System.DateTime CreationDate { get; set; }

    }
}
