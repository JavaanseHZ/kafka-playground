using System;
using Confluent.Kafka;
using client.models;
using Confluent.Kafka.Serialization;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using de.client.kafkacommand.delete;
using client.producers.client;

namespace client.consumers.client {
    public class DeleteClientConsumer {
        private ClientContext context;

        private ConsumerConfiguration consumerConfiguration;

        private ClientDeletedProducer clientDeletedProducer;

        public DeleteClientConsumer(ClientContext context, ConsumerConfiguration consumerConfiguration, ClientDeletedProducer clientDeletedProducer) {
            this.context = context;
            this.consumerConfiguration = consumerConfiguration;
            this.clientDeletedProducer = clientDeletedProducer;
            init();
        }

        private void init() {
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(consumerConfiguration.avroConfig);
            Consumer<String, DeleteClient> consumerDelete =
                new Consumer<String, DeleteClient>(
                    consumerConfiguration.consumerConfig,
                    serdeProvider.GetDeserializerGenerator<String>(),
                    serdeProvider.GetDeserializerGenerator<DeleteClient>());
            CancellationTokenSource cts = new CancellationTokenSource();
            var consumeTask = Task.Run(() =>
            {
                consumerDelete.OnError += (_, e)
                    => Console.WriteLine($"Error: {e.Reason}");

                consumerDelete.Subscribe("DeleteClient");

                while (!cts.Token.IsCancellationRequested) {
                    try {
                        var consumeResult = consumerDelete.Consume(cts.Token);
                        Console.WriteLine($"Delete Client - key: {consumeResult.Message.Key}, value: {consumeResult.Value}");
                        var item = context.ClientItems.Find(new Guid(consumeResult.Value.id));
                        if (item != null) {
                            context.Remove(item);
                            context.SaveChanges();
                            clientDeletedProducer.sendEvent(item);
                        }
                    } catch (ConsumeException e) {
                        Console.WriteLine("Consume error: " + e.Error.Reason);
                    }
                }
                consumerDelete.Close();
            }, cts.Token);
        }

    }
}