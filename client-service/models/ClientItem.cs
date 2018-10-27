using System;

namespace client.models {
    public class ClientItem {
        public Guid id { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string street { get; set; }
        public string city { get; set; }
    }
}