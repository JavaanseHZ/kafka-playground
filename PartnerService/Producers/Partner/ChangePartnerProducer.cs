using System;
using Confluent.Kafka;
using PartnerService.Models;
using Confluent.Kafka.Serialization;
using de.partner.kafkacommand.change;

namespace PartnerService.Producers.Partner {
    public class ChangePartnerProducer {
        private  Producer<String, ChangePartner> producerCreated;
        private ProducerConfiguration producerConfiguration;

        public ChangePartnerProducer(ProducerConfiguration producerConfiguration) {
            this.producerConfiguration = producerConfiguration;
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(producerConfiguration.avroConfig);
            producerCreated = new Producer<String, ChangePartner>(
                producerConfiguration.producerConfig,
                serdeProvider.GetSerializerGenerator<String>(),
                serdeProvider.GetSerializerGenerator<ChangePartner>());
        }

        public void sendEvent(PartnerItem partnerItem) {
            Action<DeliveryReportResult<String, ChangePartner>> handler = r => 
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var partnerName = new Name {firstname = partnerItem.firstname, lastname = partnerItem.lastname};
                var partnerAddress = new Address {street = partnerItem.street, city = partnerItem.city};
                var ChangePartner = new ChangePartner{id = partnerItem.id.ToString(), Name = partnerName, Address = partnerAddress};
                producerCreated
                        .ProduceAsync("ChangePartner", new Message<String, ChangePartner> { Key = partnerItem.id.ToString(), Value = ChangePartner})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }
    }
}