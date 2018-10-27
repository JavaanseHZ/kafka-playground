using System;
using Confluent.Kafka;
using client.models;
using Confluent.Kafka.Serialization;
using de.client.kafkacommand.delete;

namespace client.producers.client {
    public class DeleteClientProducer {
        private  Producer<String, DeleteClient> producerCreated;
        private ProducerConfiguration producerConfiguration;

        public DeleteClientProducer(ProducerConfiguration producerConfiguration) {
            this.producerConfiguration = producerConfiguration;
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(producerConfiguration.avroConfig);
            producerCreated = new Producer<String, DeleteClient>(
                producerConfiguration.producerConfig,
                serdeProvider.GetSerializerGenerator<String>(),
                serdeProvider.GetSerializerGenerator<DeleteClient>());
        }

        public void sendEvent(ClientItem clientItem) {
            Action<DeliveryReportResult<String, DeleteClient>> handler = r =>
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var deleteClient = new DeleteClient{id = clientItem.id.ToString()};
                producerCreated
                        .ProduceAsync("DeleteClient", new Message<String, DeleteClient> { Key = clientItem.id.ToString(), Value = deleteClient})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }
    }
}