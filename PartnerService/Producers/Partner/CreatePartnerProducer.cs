using System;
using Confluent.Kafka;
using PartnerService.Models;
using Confluent.Kafka.Serialization;
using de.partner.kafkacommand.create;

namespace PartnerService.Producers.Partner {
    public class CreatePartnerProducer {
        private  Producer<String, CreatePartner> producerCreated;
        private ProducerConfiguration producerConfiguration;

        public CreatePartnerProducer(ProducerConfiguration producerConfiguration) {
            this.producerConfiguration = producerConfiguration;
            AvroSerdeProvider serdeProvider = new AvroSerdeProvider(producerConfiguration.avroConfig);
            producerCreated = new Producer<String, CreatePartner>(
                producerConfiguration.producerConfig,
                serdeProvider.GetSerializerGenerator<String>(),
                serdeProvider.GetSerializerGenerator<CreatePartner>());
        }

        public void sendEvent(PartnerItem partnerItem) {
            Action<DeliveryReportResult<String, CreatePartner>> handler = r => 
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var partnerName = new Name {firstname = partnerItem.firstname, lastname = partnerItem.lastname};
                var partnerAddress = new Address {street = partnerItem.street, city = partnerItem.city};
                var CreatePartner = new CreatePartner{id = partnerItem.id.ToString(), Name = partnerName, Address = partnerAddress};
                producerCreated
                        .ProduceAsync("CreatePartner", new Message<String, CreatePartner> { Key = partnerItem.id.ToString(), Value = CreatePartner})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }
    }
}