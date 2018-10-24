using System;
using Confluent.Kafka;
using PartnerService.Models;
using Confluent.Kafka.Serialization;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using de.partner.kafkaevent.deleted;

namespace PartnerService.Consumers.Partner {
    public class PartnerDeletedConsumer : AbstractConsumer {
        private PartnerContext context;
        private ConsumerConfiguration consumerConfiguration;

        public PartnerDeletedConsumer(PartnerContext context, ConsumerConfiguration consumerConfiguration) {
            this.context = context;
            this.consumerConfiguration = consumerConfiguration;
            init();
        }

        override protected void init() {
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(consumerConfiguration.avroConfig);
            Consumer<String, PartnerDeleted> consumerDeleted =
                new Consumer<String, PartnerDeleted>(
                    consumerConfiguration.consumerConfig,
                    serdeProvider.GetDeserializerGenerator<String>(),
                    serdeProvider.GetDeserializerGenerator<PartnerDeleted>());
            
            var consumeTask = Task.Run(() =>
            {
                consumerDeleted.OnError += (_, e)
                    => Console.WriteLine($"Error: {e.Reason}");

                consumerDeleted.Subscribe("PartnerDeleted");

                while (!cts.Token.IsCancellationRequested) {
                    try {
                        var consumeResult = consumerDeleted.Consume(cts.Token);
                        Console.WriteLine($"Partner Deleted - key: {consumeResult.Message.Key}, value: {consumeResult.Value}");
                        var partnerId = consumeResult.Value.id;
                        var partnerItem = context.PartnerItems.Find(new Guid(partnerId));
                        if(partnerItem != null) {
                            context.Remove(partnerItem);
                            context.SaveChanges();
                        }
                    } catch (ConsumeException e) {
                        Console.WriteLine("Consume error: " + e.Error.Reason);
                    }
                }

                consumerDeleted.Close();
            }, cts.Token);
        }

    }
}