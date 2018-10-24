using System;
using Confluent.Kafka;
using PartnerService.Models;
using Confluent.Kafka.Serialization;
using de.partner.kafkacommand.change;
using de.partner.kafkacommand.create;

namespace PartnerService.Producers {
    public class PartnerProducer : IPartnerProducer {
        private AvroSerdeProvider serdeProvider;
        private  Producer<String, ChangePartner> producerChanged;
        private  Producer<String, CreatePartner> producerCreated;
        private ProducerConfig producerConfig = new ProducerConfig {BootstrapServers = "localhost:9092" };
        private AvroSerdeProviderConfig avroConfig = new AvroSerdeProviderConfig {
            SchemaRegistryUrl = "http://localhost:8081",
            SchemaRegistryRequestTimeoutMs = 5000,
            SchemaRegistryMaxCachedSchemas = 10,
            AvroSerializerBufferBytes = 50,
            AvroSerializerAutoRegisterSchemas = true
        };

        public PartnerProducer() {
            serdeProvider = new AvroSerdeProvider(avroConfig);
            producerChanged = new Producer<String, ChangePartner>(producerConfig, serdeProvider.GetSerializerGenerator<String>(), serdeProvider.GetSerializerGenerator<ChangePartner>());
            producerCreated = new Producer<String, CreatePartner>(producerConfig, serdeProvider.GetSerializerGenerator<String>(), serdeProvider.GetSerializerGenerator<CreatePartner>());
        }

        public void sendChangePartner(PartnerItem partnerItem) {
            Action<DeliveryReportResult<String, ChangePartner>> handler = r => 
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var partnerName = new de.partner.kafkacommand.change.Name {firstname = partnerItem.firstname, lastname = partnerItem.lastname};
                var partnerAddress = new de.partner.kafkacommand.change.Address {street = partnerItem.street, city = partnerItem.city};
                var changePartner = new ChangePartner{id = partnerItem.id.ToString(), Name = partnerName, Address = partnerAddress};
                producerChanged
                        .ProduceAsync("ChangePartner", new Message<String, ChangePartner> { Key = partnerItem.id.ToString(), Value = changePartner})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }

        public void sendCreatePartner(PartnerItem partnerItem) {
            Action<DeliveryReportResult<String, CreatePartner>> handler = r => 
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var partnerName = new de.partner.kafkacommand.create.Name {firstname = partnerItem.firstname, lastname = partnerItem.lastname};
                var partnerAddress = new de.partner.kafkacommand.create.Address {street = partnerItem.street, city = partnerItem.city};
                var CreatePartner = new CreatePartner{id = partnerItem.id.ToString(), Name = partnerName, Address = partnerAddress};
                producerCreated
                        .ProduceAsync("CreatePartner", new Message<String, CreatePartner> { Key = partnerItem.id.ToString(), Value = CreatePartner})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }
    }
}