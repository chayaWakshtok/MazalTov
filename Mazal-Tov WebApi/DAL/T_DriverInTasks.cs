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
    
    public partial class T_DriverInTasks
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public T_DriverInTasks()
        {
            this.T_FilesInDriverTasks = new HashSet<T_FilesInDriverTasks>();
        }
    
        public int IdDriverInTasks { get; set; }
        public int DriverId { get; set; }
        public int TaskId { get; set; }
        public System.DateTime LastControlDate { get; set; }
        public bool IsActive { get; set; }
    
        public virtual driver driver { get; set; }
        public virtual T_Tasks T_Tasks { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<T_FilesInDriverTasks> T_FilesInDriverTasks { get; set; }
    }
}