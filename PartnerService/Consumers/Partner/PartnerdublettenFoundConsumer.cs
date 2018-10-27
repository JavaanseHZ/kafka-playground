using System;
using Confluent.Kafka;
using PartnerService.Models;
using Confluent.Kafka.Serialization;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using de.partner.kafkaevent.dubletten;

namespace PartnerService.Consumers.Partner {
    public class PartnerdublettenFoundConsumer {
        private PartnerContext context;

        private ConsumerConfiguration consumerConfiguration;

        public PartnerdublettenFoundConsumer(PartnerContext context, ConsumerConfiguration consumerConfiguration) {
            this.context = context;
            this.consumerConfiguration = consumerConfiguration;
            init();
        }

        private void init() {
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(consumerConfiguration.avroConfig);
            Consumer<String, PartnerdublettenFound> consumerChanged =
                new Consumer<String, PartnerdublettenFound>(
                    consumerConfiguration.consumerConfig,
                    serdeProvider.GetDeserializerGenerator<String>(),
                    serdeProvider.GetDeserializerGenerator<PartnerdublettenFound>());
            CancellationTokenSource cts = new CancellationTokenSource();
            var consumeTask = Task.Run(() =>
            {
                consumerChanged.OnError += (_, e)
                    => Console.WriteLine($"Error: {e.Reason}");

                consumerChanged.Subscribe("PartnerdublettenFound");

                while (!cts.Token.IsCancellationRequested) {
                    try {
                        var consumeResult = consumerChanged.Consume(cts.Token);
                        Console.WriteLine($"Partner Changed - key: {consumeResult.Message.Key}, value: {consumeResult.Value}");
                        var oldItem = context.PartnerItems.Find(consumeResult.Value.oldpartnerid);
                        if (oldItem != null) {
                            var newItem = new PartnerItem {
                                id = new Guid(consumeResult.Value.newpartnerid),
                                firstname = oldItem.firstname,
                                lastname = oldItem.lastname,
                                street = oldItem.street,
                                city = oldItem.city
                            };
                            context.PartnerItems.Add(newItem);
                            context.PartnerItems.Remove(oldItem);
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