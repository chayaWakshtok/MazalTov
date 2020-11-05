using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
 public   class payment
    {
        public int Id { get; set; }
        public DateTime CreateDate { get; set; }
        public int FromMonth { get; set; }
        public int FromYear { get; set; }
        public decimal Sum { get; set; }
        public decimal Bonus { get; set; }
        public decimal TotalPrice { get; set; }
        public int Status { get; set; }
        public int WorkerId { get; set; }

    }
}
