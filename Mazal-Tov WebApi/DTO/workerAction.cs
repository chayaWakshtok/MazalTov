using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class workerAction
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public DateTime CreateDate { get; set; }
        public string Remark { get; set; }
        public int WorkerId { get; set; }

    }
}
