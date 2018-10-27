using System;
using Confluent.Kafka;
using client.models;
using Confluent.Kafka.Serialization;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using de.client.kafkaevent.duplicates;

namespace client.consumers.client {
    public class ClientDuplicatesFoundConsumer {
        private ClientContext context;

        private ConsumerConfiguration consumerConfiguration;

        public ClientDuplicatesFoundConsumer(ClientContext context, ConsumerConfiguration consumerConfiguration) {
            this.context = context;
            this.consumerConfiguration = consumerConfiguration;
            init();
        }

        private void init() {
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(consumerConfiguration.avroConfig);
            Consumer<String, ClientDuplicatesFound> consumerChanged =
                new Consumer<String, ClientDuplicatesFound>(
                    consumerConfiguration.consumerConfig,
                    serdeProvider.GetDeserializerGenerator<String>(),
                    serdeProvider.GetDeserializerGenerator<ClientDuplicatesFound>());
            CancellationTokenSource cts = new CancellationTokenSource();
            var consumeTask = Task.Run(() =>
            {
                consumerChanged.OnError += (_, e)
                    => Console.WriteLine($"Error: {e.Reason}");

                consumerChanged.Subscribe("ClientDuplicatesFound");

                while (!cts.Token.IsCancellationRequested) {
                    try {
                        var consumeResult = consumerChanged.Consume(cts.Token);
                        Console.WriteLine($"Client Changed - key: {consumeResult.Message.Key}, value: {consumeResult.Value}");
                        var oldItem = context.ClientItems.Find(consumeResult.Value.oldclientid);
                        if (oldItem != null) {
                            var newItem = new ClientItem {
                                id = new Guid(consumeResult.Value.newclientid),
                                firstname = oldItem.firstname,
                                lastname = oldItem.lastname,
                                street = oldItem.street,
                                city = oldItem.city
                            };
                            context.ClientItems.Add(newItem);
                            context.ClientItems.Remove(oldItem);
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