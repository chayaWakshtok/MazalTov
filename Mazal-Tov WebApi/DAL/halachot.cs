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
    
    public partial class halachot
    {
        public int Id { get; set; }
        public string Halacha { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
        public Nullable<int> UserId { get; set; }
        public string Name { get; set; }
        public string Subject { get; set; }
        public Nullable<int> Category { get; set; }
        public Nullable<bool> IsOk { get; set; }
        public Nullable<bool> IsTaken { get; set; }
    
        public virtual user user { get; set; }
    }
}
