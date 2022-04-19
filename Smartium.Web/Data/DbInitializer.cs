using Smartium.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Smartium.Web.Data
{
    public class DbInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.House.Any())
            {
                return;   // DB has been seeded
            }

            var students = new House[]
            {
                new House{Name = "My House",  UserId="29bbe010-e7ce-4206-b5c7-f3b10026f85c"}
            };
            foreach (House s in students)
            {
                context.House.Add(s);
            }
            context.SaveChanges();

            var indicatorLogs = new IndicatorLog[]
            {
                new IndicatorLog{IndicatorType=IndicatorType.ClimateTemperature, Value="24", CreatedOn=new DateTime(2022,4,10,6,0,0)},
                new IndicatorLog{IndicatorType=IndicatorType.ClimateTemperature, Value="22", CreatedOn=new DateTime(2022,4,10,6,10,0)},
                new IndicatorLog{IndicatorType=IndicatorType.ClimateTemperature, Value="26", CreatedOn=new DateTime(2022,4,10,6,20,0)},
                new IndicatorLog{IndicatorType=IndicatorType.ClimateHumiditi, Value="24", CreatedOn=new DateTime(2022,4,10,6,0,0)},
                new IndicatorLog{IndicatorType=IndicatorType.ClimateHumiditi, Value="20", CreatedOn=new DateTime(2022,4,10,6,10,0)},
                new IndicatorLog{IndicatorType=IndicatorType.ClimateHumiditi, Value="29", CreatedOn=new DateTime(2022,4,10,6,20,0)},
            };
            foreach (IndicatorLog c in indicatorLogs)
            {
                context.IndicatorLog.Add(c);
            }
            context.SaveChanges();

            var climate = new Climate[]
            {
                new Climate{HouseId=1, HumiditiId=6,TemperatureId=3}
            };
            foreach (Climate c in climate)
            {
                context.Climate.Add(c);
            }
            context.SaveChanges();
        } 
    }
}
