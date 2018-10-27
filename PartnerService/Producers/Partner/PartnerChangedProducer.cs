using System;
using Confluent.Kafka;
using PartnerService.Models;
using Confluent.Kafka.Serialization;
using de.partner.kafkaevent.changed;

namespace PartnerService.Producers.Partner {
    public class PartnerChangedProducer {
        private  Producer<String, PartnerChanged> producerCreated;
        private ProducerConfiguration producerConfiguration;

        public PartnerChangedProducer(ProducerConfiguration producerConfiguration) {
            this.producerConfiguration = producerConfiguration;
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(producerConfiguration.avroConfig);
            producerCreated = new Producer<String, PartnerChanged>(
                producerConfiguration.producerConfig,
                serdeProvider.GetSerializerGenerator<String>(),
                serdeProvider.GetSerializerGenerator<PartnerChanged>());
        }

        public void sendEvent(PartnerItem partnerItem) {
            Action<DeliveryReportResult<String, PartnerChanged>> handler = r => 
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var partnerName = new Name {firstname = partnerItem.firstname, lastname = partnerItem.lastname};
                var partnerAddress = new Address {street = partnerItem.street, city = partnerItem.city};
                var partnerChanged = new PartnerChanged{id = partnerItem.id.ToString(), Name = partnerName, Address = partnerAddress};
                producerCreated
                        .ProduceAsync("PartnerChanged", new Message<String, PartnerChanged> { Key = partnerItem.id.ToString(), Value = partnerChanged})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }
    }
}