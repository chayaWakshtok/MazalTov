using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class worker
    {
        public int Id { get; set; }
        public int Experiance { get; set; }
        public DateTime BornDate { get; set; }
        public string Tell { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string Email { get; set; }
        public string Remark { get; set; }
        public int Gender { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public string ConfidentComment { get; set; }
        public decimal HourPrice { get; set; }
        public decimal MonthPrice { get; set; }
        public float NumHourWork { get; set; }
        public int UserId { get; set; }
        public int BankId { get; set; }

       

    }
}
