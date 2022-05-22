using System;
using System.Collections.Generic;
using System.Text;

namespace Smartium.Models
{
    public class FireProtection
    {
        public int FireProtectionId { get; set; }
        public int GasId { get; set; }
        public IndicatorLog GasLog { get; set; }
        public int SmokeId { get; set; }
        public IndicatorLog SmokeLog { get; set; }
        public int HouseId { get; set; }
        public House House { get; set; }
        public bool IsAlertOn { get; set; }
        public bool IsVentilationOn { get; set; }
    }
}
