using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Smartium.Models
{
    public class Climate
    {
        public int ClimateId { get; set; }
        public int TemperatureId { get; set; }
        public IndicatorLog TemperatureLog { get; set; }
        public int HumiditiId { get; set; }
        public IndicatorLog HumiditiLog { get; set; }
        public int HouseId { get; set; }
        public House House { get; set; }
        public bool IsHeatingOn { get; set; }
        public bool IsVentilationOn { get; set; }
        public bool IsAirConditionOn { get; set; }
    }
}
