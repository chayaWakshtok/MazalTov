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
    
    public partial class bus
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public bus()
        {
            this.station_bus = new HashSet<station_bus>();
        }
    
        public int kav { get; set; }
        public Nullable<int> driverid { get; set; }
        public Nullable<System.TimeSpan> time_start { get; set; }
        public Nullable<System.TimeSpan> time_end { get; set; }
        public Nullable<int> frequncy { get; set; }
        public Nullable<int> station_start { get; set; }
        public Nullable<int> station_end { get; set; }
    
        public virtual driver driver { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<station_bus> station_bus { get; set; }
    }
}
