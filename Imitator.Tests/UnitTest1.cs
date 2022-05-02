using Imitator.Models;
using NUnit.Framework;
using System;
using System.Collections.Generic;

namespace Imitator.Tests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            var imitator = new ImitatorFacade();
            var inputDays = new List<Day>
            {
                new Day
                {
                    Date = DateTime.Parse("2022-04-17 00:00:00.000"),
                    RangesLightOn = new List<DateTimeRange>
                    {
                        new DateTimeRange
                        {
                            StartDateTime = DateTime.Parse("2022-04-17 00:10:03.969"),
                            EndDateTime = DateTime.Parse("2022-04-17 00:25:03.969")
                        }
                    }
                },
                new Day
                {
                    Date = DateTime.Parse("2022-04-24 00:00:00.000"),
                    RangesLightOn = new List<DateTimeRange>
                    {
                        new DateTimeRange
                        {
                            StartDateTime = DateTime.Parse("2022-04-24 00:20:03.969"),
                            EndDateTime = DateTime.Parse("2022-04-24 00:35:03.969")
                        },
                        new DateTimeRange
                        {
                            StartDateTime = DateTime.Parse("2022-04-24 01:20:03.969"),
                            EndDateTime = DateTime.Parse("2022-04-24 01:35:03.969")
                        }
                    }
                },
                new Day
                {
                    Date = DateTime.Parse("2022-04-10 00:00:00.000"),
                    RangesLightOn = new List<DateTimeRange>
                    {
                        new DateTimeRange
                        {
                            StartDateTime = DateTime.Parse("2022-04-10 00:30:03.969"),
                            EndDateTime = DateTime.Parse("2022-04-10 00:35:03.969")
                        },
                        new DateTimeRange
                        {
                            StartDateTime = DateTime.Parse("2022-04-10 01:20:03.969"),
                            EndDateTime = DateTime.Parse("2022-04-10 01:35:03.969")
                        },
                        new DateTimeRange
                        {
                            StartDateTime = DateTime.Parse("2022-04-10 02:20:03.969"),
                            EndDateTime = DateTime.Parse("2022-04-10 02:35:03.969")
                        }
                    }
                }
            };
            var res = imitator.BuildImitationScenario(inputDays);

            Assert.Pass();
        }
    }
}