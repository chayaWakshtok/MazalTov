﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class candidate
    {
        public int Id { get; set; }
        public DateTime BornDate { get; set; }
        public int Status { get; set; }
        public bool IsPayFood { get; set; }
        public int Gender { get; set; }
        public string Address { get; set; }
        public string MedicalProblem { get; set; }
        public string NameFather { get; set; }
        public string FamilyMother { get; set; }
        public int NumChildren { get; set; }
        public int NumMarried { get; set; }
        public int NumMatching { get; set; }
        public string FatherWork { get; set; }
        public string MotherWork { get; set; }
        public string CandidateWork { get; set; }
        public int LastPlaceLearn { get; set; }
        public string Show { get; set; }
        public int Clothes { get; set; }
        public string Tell { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string Email { get; set; }
        public string Remark { get; set; }
        public int EnterBy { get; set; }
        public int UserId { get; set; }
        public int CityId { get; set; }
        public int IsOk { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int SumPay { get; set; }
        public int MatchmarkerId { get; set; }
        public int SectorId { get; set; }
        public int ChasidutId { get; set; }
        public int ChasidutMother { get; set; }
        public int ChasidutFather { get; set; }

    }
}