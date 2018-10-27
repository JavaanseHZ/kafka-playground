using System;
using Confluent.Kafka;
using client.models;
using Confluent.Kafka.Serialization;
using de.client.kafkaevent.changed;

namespace client.producers.client {
    public class ClientChangedProducer {
        private  Producer<String, ClientChanged> producerCreated;
        private ProducerConfiguration producerConfiguration;

        public ClientChangedProducer(ProducerConfiguration producerConfiguration) {
            this.producerConfiguration = producerConfiguration;
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(producerConfiguration.avroConfig);
            producerCreated = new Producer<String, ClientChanged>(
                producerConfiguration.producerConfig,
                serdeProvider.GetSerializerGenerator<String>(),
                serdeProvider.GetSerializerGenerator<ClientChanged>());
        }

        public void sendEvent(ClientItem clientItem) {
            Action<DeliveryReportResult<String, ClientChanged>> handler = r =>
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var clientName = new Name {firstname = clientItem.firstname, lastname = clientItem.lastname};
                var clientAddress = new Address {street = clientItem.street, city = clientItem.city};
                var clientChanged = new ClientChanged{id = clientItem.id.ToString(), Name = clientName, Address = clientAddress};
                producerCreated
                        .ProduceAsync("ClientChanged", new Message<String, ClientChanged> { Key = clientItem.id.ToString(), Value = clientChanged})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }
    }
}