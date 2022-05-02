using Imitator.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Imitator
{
    public class ImitatorFacade
    {
        public IEnumerable<DateTimeRange> BuildImitationScenario(List<Day> days)
        {
            if (days == null)
                return null;
            var dictionary = new Dictionary<int, List<DateTimeRange>>();

            var longest = days.OrderByDescending(d => d.RangesLightOn.Count()).First();
            for (int i = 0; i < longest.RangesLightOn.Count(); i++)
            {
                dictionary.Add(i, new List<DateTimeRange> { ((List<DateTimeRange>)longest.RangesLightOn)[i] });
            }
            days.Remove(longest);
            foreach (var day in days)
            {
                for (int i = 0; i < day.RangesLightOn.Count(); i++)
                {
                    dictionary[i].Add(((List<DateTimeRange>)day.RangesLightOn)[i]);
                }
            }

            var result = new List<DateTimeRange>();
            foreach (var dic in dictionary)
            {
                int secondsFromStartOfDay_Start = 0;
                int secondsFromStartOfDay_End = 0;
                foreach (var range in dic.Value)
                {
                    secondsFromStartOfDay_Start += range.StartDateTime.Hour * 3600 + range.StartDateTime.Minute * 60 + range.StartDateTime.Second;
                    secondsFromStartOfDay_End += range.EndDateTime.Hour * 3600 + range.EndDateTime.Minute * 60 + range.EndDateTime.Second;
                }
                int midleSec_Start = secondsFromStartOfDay_Start / dic.Value.Count;
                int midleSec_End = secondsFromStartOfDay_End / dic.Value.Count;

                TimeSpan start = TimeSpan.FromSeconds(midleSec_Start);
                TimeSpan end = TimeSpan.FromSeconds(midleSec_End);

                result.Add(new DateTimeRange
                {
                    StartDateTime = new DateTime(2022, 1, 1, start.Hours, start.Minutes, start.Seconds),
                    EndDateTime = new DateTime(2022, 1, 1, end.Hours, end.Minutes, end.Seconds)
                });
            }


            return result;
        }
    }
}
