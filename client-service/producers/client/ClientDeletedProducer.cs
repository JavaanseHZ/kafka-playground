using System;
using Confluent.Kafka;
using client.models;
using Confluent.Kafka.Serialization;
using de.client.kafkaevent.deleted;

namespace client.producers.client {
    public class ClientDeletedProducer {
        private  Producer<String, ClientDeleted> producerCreated;
        private ProducerConfiguration producerConfiguration;

        public ClientDeletedProducer(ProducerConfiguration producerConfiguration) {
            this.producerConfiguration = producerConfiguration;
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(producerConfiguration.avroConfig);
            producerCreated = new Producer<String, ClientDeleted>(
                producerConfiguration.producerConfig,
                serdeProvider.GetSerializerGenerator<String>(),
                serdeProvider.GetSerializerGenerator<ClientDeleted>());
        }

        public void sendEvent(ClientItem clientItem) {
            Action<DeliveryReportResult<String, ClientDeleted>> handler = r =>
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var clientDeleted = new ClientDeleted{id = clientItem.id.ToString()};
                producerCreated
                        .ProduceAsync("ClientDeleted", new Message<String, ClientDeleted> { Key = clientItem.id.ToString(), Value = clientDeleted})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }
    }
}