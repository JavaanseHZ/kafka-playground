using System;

namespace PartnerService.Models {
    public class PartnerItem {
        public Guid id { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string street { get; set; }
        public string city { get; set; }
    }
}