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
    
    public partial class matchingHelper
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string Remark { get; set; }
        public System.DateTime CreateDate { get; set; }
        public int Status { get; set; }
        public System.DateTime UpdateDate { get; set; }
        public Nullable<bool> IsPaid { get; set; }
        public Nullable<double> NumHour { get; set; }
        public int Level { get; set; }
        public int Type { get; set; }
        public int MatchingId { get; set; }
        public int MatchmarkerId { get; set; }
        public Nullable<int> HelperId { get; set; }
    
        public virtual helper helper { get; set; }
        public virtual matching matching { get; set; }
        public virtual matchmaker matchmaker { get; set; }
    }
}
