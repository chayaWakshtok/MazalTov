//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class candidateFamily
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Nullable<int> Age { get; set; }
        public string PlaceLearn { get; set; }
        public Nullable<System.DateTime> CreationDate { get; set; }
        public Nullable<int> CandidateId { get; set; }
    
        public virtual candidate candidate { get; set; }
    }
}
