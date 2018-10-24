using System;
using Confluent.Kafka;
using PartnerService.Models;
using Confluent.Kafka.Serialization;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using de.partner.kafkaevent.changed;

namespace PartnerService.Consumers.Partner {
    public class PartnerChangedConsumer : AbstractConsumer {
        private PartnerContext context;

        private ConsumerConfiguration consumerConfiguration;

        public PartnerChangedConsumer(PartnerContext context, ConsumerConfiguration consumerConfiguration) {
            this.context = context;
            this.consumerConfiguration = consumerConfiguration;
            init();
        }

        override protected void init() {
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(consumerConfiguration.avroConfig);
            Consumer<String, PartnerChanged> consumerChanged =
                new Consumer<String, PartnerChanged>(
                    consumerConfiguration.consumerConfig,
                    serdeProvider.GetDeserializerGenerator<String>(),
                    serdeProvider.GetDeserializerGenerator<PartnerChanged>());
            
            var consumeTask = Task.Run(() =>
            {
                consumerChanged.OnError += (_, e)
                    => Console.WriteLine($"Error: {e.Reason}");

                consumerChanged.Subscribe("PartnerChanged");

                while (!cts.Token.IsCancellationRequested) {
                    try {
                        var consumeResult = consumerChanged.Consume(cts.Token);
                        Console.WriteLine($"Partner Changed - key: {consumeResult.Message.Key}, value: {consumeResult.Value}");
                        var item = context.PartnerItems.Find(consumeResult.Value.id);
                        if (item != null) {
                            item.firstname = consumeResult.Value.Name.firstname;
                            item.lastname = consumeResult.Value.Name.lastname;
                            item.street = consumeResult.Value.Address.street;
                            item.city = consumeResult.Value.Address.city;
                            context.PartnerItems.Update(item);
                            context.SaveChanges();
                        }
                    } catch (ConsumeException e) {
                        Console.WriteLine("Consume error: " + e.Error.Reason);
                    }
                }
                consumerChanged.Close();
            }, cts.Token);
        }

    }
}