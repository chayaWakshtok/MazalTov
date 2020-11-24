﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Helper
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public int Type { get; set; }
        public int WorkerId { get; set; }
        public int CityId { get; set; }
        public int SectorId { get; set; }
        public Worker Worker { get; set; }

    }
}
