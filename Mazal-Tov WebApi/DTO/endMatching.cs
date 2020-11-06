using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class EndMatching
    {
        public int Id { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public bool IsPaid { get; set; }
        public int WhoPaid { get; set; }
        public decimal Price { get; set; }
        public string Remark { get; set; }
        public bool IsCare { get; set; }
        public string EndPlace { get; set; }
        public int MatchingId { get; set; }
       


    }
}
