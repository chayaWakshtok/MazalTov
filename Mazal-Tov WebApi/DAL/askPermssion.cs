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
    
    public partial class askPermssion
    {
        public int Id { get; set; }
        public string Remark { get; set; }
        public System.DateTime CreateDate { get; set; }
        public int Status { get; set; }
        public int PermssionId { get; set; }
        public int UserId { get; set; }
    
        public virtual permssion permssion { get; set; }
        public virtual user user { get; set; }
    }
}
