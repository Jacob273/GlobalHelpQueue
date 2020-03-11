using System;
using System.Collections.Generic;
using System.Text;
using static GHTS.Common.Enums;

namespace GHTS.DTO
{
    public class TicketDTO
    {
        public string ProblemDescription { get; set; }
        public string Expectations { get; set; }
        public TickerPriority Priority { get; set; }
        public string ContactNumber { get; set; }
        public LocalizationDTO Localization { get;set;}

    }
}
