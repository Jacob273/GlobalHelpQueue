using System;
using System.Collections.Generic;
using System.Text;

namespace GHTS.Common
{
    public static class Enums
    {
        public enum TickerPriority
        {
            CanWaitDays = 0,
            CanWaitSeveralHours,
            NeedHelpNow
        }
    }
}
