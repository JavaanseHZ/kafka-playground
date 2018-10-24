using System;
using Confluent.Kafka;
using PartnerService.Models;
using Confluent.Kafka.Serialization;
using de.partner.changed;
using de.partner.created;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace PartnerService.Consumers {
    public class PartnerConsumer : IPartnerConsumer {
        private PartnerContext context;
        private AvroSerdeProvider serdeProvider;
        private  Consumer<String, PartnerCreated> consumerCreated;
        private  Consumer<String, PartnerChanged> consumerChanged;
        private CancellationTokenSource partnerChangedToken = new CancellationTokenSource();
        private CancellationTokenSource partnerCreatedToken = new CancellationTokenSource();
        private ConsumerConfig consumerConfig = new ConsumerConfig { 
            GroupId = "partnerGroup",
            BootstrapServers = "localhost:9092",
            AutoOffsetReset = AutoOffsetResetType.Earliest
        };

        private AvroSerdeProviderConfig avroConfig = new AvroSerdeProviderConfig {
            SchemaRegistryUrl = "http://localhost:8081",
            SchemaRegistryRequestTimeoutMs = 5000,
            SchemaRegistryMaxCachedSchemas = 10
        };

        public PartnerConsumer(PartnerContext context) {
            this.context = context;
            serdeProvider = new AvroSerdeProvider(avroConfig);
            consumerCreated = new Consumer<String, PartnerCreated>(consumerConfig, serdeProvider.GetDeserializerGenerator<String>(), serdeProvider.GetDeserializerGenerator<PartnerCreated>());
            consumerChanged = new Consumer<String, PartnerChanged>(consumerConfig, serdeProvider.GetDeserializerGenerator<String>(), serdeProvider.GetDeserializerGenerator<PartnerChanged>());
            initPartnerChanged(partnerChangedToken);
            initPartnerCreated(partnerCreatedToken);
        }

        public void initPartnerCreated(CancellationTokenSource cts) {
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

        public void initPartnerChanged(CancellationTokenSource cts) {
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