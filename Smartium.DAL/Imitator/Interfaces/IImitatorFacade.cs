using Imitator.Models;
using System.Collections.Generic;

namespace Imitator.Interfaces
{
    public interface IImitatorFacade
    {
        IEnumerable<DateTimeRange> BuildImitationScenario(List<Day> days);
    }
}
