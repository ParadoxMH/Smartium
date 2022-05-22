using System;
using System.Collections.Generic;
using System.Text;

namespace Smartium.Models
{
    public class Security
    {
        public int SecurityId { get; set; } 
        public int HouseId { get; set; }
        public House House { get; set; }
        public bool IsAlertOn { get; set; }
        public bool IsMainLockLocked { get; set; }
        public bool AreWindowsLocked { get; set; }
    }
}
