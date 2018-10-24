using System;
using Confluent.Kafka;
using PartnerService.Models;
using Confluent.Kafka.Serialization;
using de.partner.kafkaevent.deleted;

namespace PartnerService.Producers.Partner {
    public class PartnerDeletedProducer {
        private  Producer<String, PartnerDeleted> producerCreated;
        private ProducerConfiguration producerConfiguration;

        public PartnerDeletedProducer(ProducerConfiguration producerConfiguration) {
            this.producerConfiguration = producerConfiguration;
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(producerConfiguration.avroConfig);
            producerCreated = new Producer<String, PartnerDeleted>(
                producerConfiguration.producerConfig,
                serdeProvider.GetSerializerGenerator<String>(),
                serdeProvider.GetSerializerGenerator<PartnerDeleted>());
        }

        public void sendEvent(PartnerItem partnerItem) {
            Action<DeliveryReportResult<String, PartnerDeleted>> handler = r => 
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var partnerDeleted = new PartnerDeleted{id = partnerItem.id.ToString()};
                producerCreated
                        .ProduceAsync("PartnerDeleted", new Message<String, PartnerDeleted> { Key = partnerItem.id.ToString(), Value = partnerDeleted})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }
    }
}