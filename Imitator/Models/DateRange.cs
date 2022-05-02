using System;
using System.Collections.Generic;

namespace Imitator.Models
{
    public class DateTimeRange
    {
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
    }

    public class Day
    {
        public DateTime Date { get; set; }
        public IEnumerable<DateTimeRange> RangesLightOn { get; set; }
    }
}
