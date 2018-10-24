using System;
using Confluent.Kafka;
using PartnerService.Models;
using Confluent.Kafka.Serialization;
using de.partner.kafkacommand.delete;

namespace PartnerService.Producers.Partner {
    public class DeletePartnerProducer {
        private  Producer<String, DeletePartner> producerCreated;
        private ProducerConfiguration producerConfiguration;

        public DeletePartnerProducer(ProducerConfiguration producerConfiguration) {
            this.producerConfiguration = producerConfiguration;
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(producerConfiguration.avroConfig);
            producerCreated = new Producer<String, DeletePartner>(
                producerConfiguration.producerConfig,
                serdeProvider.GetSerializerGenerator<String>(),
                serdeProvider.GetSerializerGenerator<DeletePartner>());
        }

        public void sendEvent(PartnerItem partnerItem) {
            Action<DeliveryReportResult<String, DeletePartner>> handler = r => 
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var DeletePartner = new DeletePartner{id = partnerItem.id.ToString()};
                producerCreated
                        .ProduceAsync("DeletePartner", new Message<String, DeletePartner> { Key = partnerItem.id.ToString(), Value = DeletePartner})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }
    }
}