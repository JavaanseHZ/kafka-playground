using System;
using Confluent.Kafka;
using PartnerService.Models;
using Confluent.Kafka.Serialization;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using de.partner.kafkaevent.created;

namespace PartnerService.Consumers.Partner {
    public class PartnerCreatedConsumer : AbstractConsumer {
        private PartnerContext context;
        private ConsumerConfiguration consumerConfiguration;

        public PartnerCreatedConsumer(PartnerContext context, ConsumerConfiguration consumerConfiguration) {
            this.consumerConfiguration = consumerConfiguration;
            this.context = context;
            init();
        }

        override protected void init() {
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(consumerConfiguration.avroConfig);
            Consumer<String, PartnerCreated> consumerCreated =
                new Consumer<String, PartnerCreated>(
                    consumerConfiguration.consumerConfig,
                    serdeProvider.GetDeserializerGenerator<String>(),
                    serdeProvider.GetDeserializerGenerator<PartnerCreated>());

            var consumeTask = Task.Run(() =>
            {
                consumerCreated.OnError += (_, e)
                    => Console.WriteLine($"Error: {e.Reason}");

                consumerCreated.Subscribe("PartnerCreated");

                while (!cts.Token.IsCancellationRequested) {
                    try {
                        var consumeResult = consumerCreated.Consume(cts.Token);
                        Console.WriteLine($"Partner Created - key: {consumeResult.Message.Key}, value: {consumeResult.Value}");
                        var partnerItem = new PartnerItem {
                            id = new Guid(consumeResult.Value.id),
                            firstname = consumeResult.Value.Name.firstname,
                            lastname = consumeResult.Value.Name.lastname,
                            street = consumeResult.Value.Address.street,
                            city = consumeResult.Value.Address.city,
                        };
                        context.PartnerItems.Add(partnerItem);
                        context.SaveChanges();
                    } catch (ConsumeException e) {
                        Console.WriteLine("Consume error: " + e.Error.Reason);
                    }
                }

                consumerCreated.Close();
            }, cts.Token);
        }

    }
}