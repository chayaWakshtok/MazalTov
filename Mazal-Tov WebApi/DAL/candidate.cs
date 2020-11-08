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
    
    public partial class candidate
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public candidate()
        {
            this.images = new HashSet<image>();
            this.marrieds = new HashSet<married>();
            this.candidateComments = new HashSet<candidateComment>();
            this.infoCandidates = new HashSet<infoCandidate>();
            this.matchings = new HashSet<matching>();
            this.matchings1 = new HashSet<matching>();
        }
    
        public int Id { get; set; }
        public System.DateTime BornDate { get; set; }
        public int Status { get; set; }
        public Nullable<bool> IsPayFood { get; set; }
        public int Gender { get; set; }
        public string Address { get; set; }
        public string MedicalProblem { get; set; }
        public string NameFather { get; set; }
        public string NameMother { get; set; }
        public string FamilyMother { get; set; }
        public int NumChildren { get; set; }
        public int NumMarried { get; set; }
        public Nullable<int> NumMatching { get; set; }
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
        public System.DateTime CreateDate { get; set; }
        public System.DateTime UpdateDate { get; set; }
        public Nullable<int> SumPay { get; set; }
        public Nullable<int> MatchmarkerId { get; set; }
        public int SectorId { get; set; }
        public Nullable<int> ChasidutId { get; set; }
        public Nullable<int> ChasidutMother { get; set; }
        public Nullable<int> ChasidutFather { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<image> images { get; set; }
        public virtual user user { get; set; }
        public virtual city city { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<married> marrieds { get; set; }
        public virtual sector sector { get; set; }
        public virtual chasidut chasidut { get; set; }
        public virtual chasidut chasidut1 { get; set; }
        public virtual chasidut chasidut2 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<candidateComment> candidateComments { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<infoCandidate> infoCandidates { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<matching> matchings { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<matching> matchings1 { get; set; }
        public virtual matchmaker matchmaker { get; set; }
    }
}