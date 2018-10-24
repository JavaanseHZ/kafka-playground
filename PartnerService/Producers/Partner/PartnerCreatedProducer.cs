using System;
using Confluent.Kafka;
using PartnerService.Models;
using Confluent.Kafka.Serialization;
using de.partner.kafkaevent.created;

namespace PartnerService.Producers.Partner {
    public class PartnerCreatedProducer {
        private  Producer<String, PartnerCreated> producerCreated;
        private ProducerConfiguration producerConfiguration;

        public PartnerCreatedProducer(ProducerConfiguration producerConfiguration) {
            this.producerConfiguration = producerConfiguration;
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(producerConfiguration.avroConfig);
            producerCreated = new Producer<String, PartnerCreated>(
                producerConfiguration.producerConfig,
                serdeProvider.GetSerializerGenerator<String>(),
                serdeProvider.GetSerializerGenerator<PartnerCreated>());
        }

        public void sendEvent(PartnerItem partnerItem) {
            Action<DeliveryReportResult<String, PartnerCreated>> handler = r => 
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var partnerName = new Name {firstname = partnerItem.firstname, lastname = partnerItem.lastname};
                var partnerAddress = new Address {street = partnerItem.street, city = partnerItem.city};
                var partnerCreated = new PartnerCreated{id = partnerItem.id.ToString(), Name = partnerName, Address = partnerAddress};
                producerCreated
                        .ProduceAsync("PartnerCreated", new Message<String, PartnerCreated> { Key = partnerItem.id.ToString(), Value = partnerCreated})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }
    }
}