using System;
using System.Collections.Generic;
using System.Text;

namespace Smartium.Models
{
    public class WaterSystem
    {
        public int WaterSystemId { get; set; }
        public int TemperatureId { get; set; }
        public IndicatorLog TemperatureLog { get; set; }
        public int WaterPressureId { get; set; }
        public IndicatorLog WaterPressureLog { get; set; }
        public int WaterLeadId { get; set; }
        public IndicatorLog WaterLeadLog { get; set; }
        public int HouseId { get; set; }
        public House House { get; set; }
        public bool IsAlertOn { get; set; }
    }
}
