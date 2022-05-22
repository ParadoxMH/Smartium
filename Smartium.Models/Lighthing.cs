using System;
using System.Collections.Generic;
using System.Text;

namespace Smartium.Models
{
    public class Lighthing
    {
        public int LighthingId { get; set; }
        public int LighthingIndicatorId { get; set; }
        public IndicatorLog LighthingIndicatorLog { get; set; }
        public int MovementIndicatorId { get; set; }
        public IndicatorLog MovementIndicatorLog { get; set; }  
        public int HouseId { get; set; }
        public House House { get; set; }
        public bool IsCurtainsOpen { get; set; }
        public bool IsLightOn { get; set; }
    }
}
