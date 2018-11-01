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
            Consumer<int, ClientDuplicatesFound> consumerDuplicatesFound =
                new Consumer<int, ClientDuplicatesFound>(
                    consumerConfiguration.consumerConfig,
                    serdeProvider.GetDeserializerGenerator<int>(),
                    serdeProvider.GetDeserializerGenerator<ClientDuplicatesFound>());
            CancellationTokenSource cts = new CancellationTokenSource();
            
            var consumeTask = Task.Run(() =>
            {
                consumerDuplicatesFound.OnError += (_, e)
                    => Console.WriteLine($"Error: {e.Reason}");

                consumerDuplicatesFound.Subscribe("ClientDuplicatesFound");

                while (!cts.Token.IsCancellationRequested) {
                    try {
                        var consumeResult = consumerDuplicatesFound.Consume(cts.Token);
                        Console.WriteLine($"Client Duplicate Found - key: {consumeResult.Message.Key}, value: {consumeResult.Value}");
                        var oldItem = context.ClientItems.Find(new Guid(consumeResult.Value.oldclientid));
                        if (oldItem != null) {
                            context.ClientItems.Remove(oldItem);
                            context.SaveChanges();
                        }
                    } catch (ConsumeException e) {
                        Console.WriteLine("Consume error: " + e.Error.Reason);
                    }
                }
                consumerDuplicatesFound.Close();
            }, cts.Token);
        }

    }
}