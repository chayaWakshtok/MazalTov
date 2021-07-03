using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class CandidateFamily
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string PlaceLearn { get; set; }
        public DateTime CreationDate { get; set; }
        public int CandidateId { get; set; }

        public  Candidate candidate { get; set; }
    }
}
