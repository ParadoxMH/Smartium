using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Smartium.Web.Models
{
    public class IndicatorLog
    {
        public int IndicatorLogId { get; set; }
        public IndicatorType IndicatorType { get; set; }
        public string Value { get; set; }
        public DateTime CreatedOn { get; set; }
    }

    public enum IndicatorType
    {
        ClimateTemperature,
        ClimateHumiditi
    }
}
