using System;
using Confluent.Kafka;
using client.models;
using Confluent.Kafka.Serialization;
using de.client.kafkaevent.created;

namespace client.producers.client {
    public class ClientCreatedProducer {
        private  Producer<String, ClientCreated> producerCreated;
        private ProducerConfiguration producerConfiguration;

        public ClientCreatedProducer(ProducerConfiguration producerConfiguration) {
            this.producerConfiguration = producerConfiguration;
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(producerConfiguration.avroConfig);
            producerCreated = new Producer<String, ClientCreated>(
                producerConfiguration.producerConfig,
                serdeProvider.GetSerializerGenerator<String>(),
                serdeProvider.GetSerializerGenerator<ClientCreated>());
        }

        public void sendEvent(ClientItem clientItem) {
            Action<DeliveryReportResult<String, ClientCreated>> handler = r =>
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var clientName = new Name {firstname = clientItem.firstname, lastname = clientItem.lastname};
                var clientAddress = new Address {street = clientItem.street, city = clientItem.city};
                var clientCreated = new ClientCreated{id = clientItem.id.ToString(), Name = clientName, Address = clientAddress};
                producerCreated
                        .ProduceAsync("ClientCreated", new Message<String, ClientCreated> { Key = clientItem.id.ToString(), Value = clientCreated})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }
    }
}