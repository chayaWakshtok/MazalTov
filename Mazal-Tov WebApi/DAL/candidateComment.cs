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
    
    public partial class candidateComment
    {
        public int Id { get; set; }
        public string Remark { get; set; }
        public bool Privileged { get; set; }
        public System.DateTime CreateDate { get; set; }
        public System.DateTime UpdateDate { get; set; }
        public int WriteUserId { get; set; }
        public int CandidateId { get; set; }
    
        public virtual user user { get; set; }
        public virtual candidate candidate { get; set; }
    }
}
