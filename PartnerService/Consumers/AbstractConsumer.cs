using PartnerService.Models;
using System.Threading;
using System;
using Confluent.Kafka;
using Confluent.Kafka.Serialization;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PartnerService.Consumers {
    public abstract class AbstractConsumer {

        protected CancellationTokenSource cts = new CancellationTokenSource();

        protected abstract void init ();

        public void cancel () {
             cts.Cancel();
        }
    }
}