using System;
using Confluent.Kafka;
using PartnerService.Models;
using Confluent.Kafka.Serialization;
using de.partner.changed;
using de.partner.created;

namespace PartnerService.Producers {
    public class PartnerProducer : IPartnerProducer {
        private AvroSerdeProvider serdeProvider;
        private  Producer<String, PartnerChanged> producerChanged;
        private  Producer<String, PartnerCreated> producerCreated;
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
            producerChanged = new Producer<String, PartnerChanged>(producerConfig, serdeProvider.GetSerializerGenerator<String>(), serdeProvider.GetSerializerGenerator<PartnerChanged>());
            producerCreated = new Producer<String, PartnerCreated>(producerConfig, serdeProvider.GetSerializerGenerator<String>(), serdeProvider.GetSerializerGenerator<PartnerCreated>());
        }

        public void sendPartnerChanged(PartnerItem partnerItem) {
            Action<DeliveryReportResult<String, PartnerChanged>> handler = r => 
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var partnerName = new de.partner.changed.Name {firstname = partnerItem.firstname, lastname = partnerItem.lastname};
                var partnerAddress = new de.partner.changed.Address {street = partnerItem.street, city = partnerItem.city};
                var partnerChanged = new PartnerChanged{id = partnerItem.id.ToString(), Name = partnerName, Address = partnerAddress};
                producerChanged
                        .ProduceAsync("PartnerChanged", new Message<String, PartnerChanged> { Key = partnerItem.id.ToString(), Value = partnerChanged})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }

        public void sendPartnerCreated(PartnerItem partnerItem) {
            Action<DeliveryReportResult<String, PartnerCreated>> handler = r => 
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var partnerName = new de.partner.created.Name {firstname = partnerItem.firstname, lastname = partnerItem.lastname};
                var partnerAddress = new de.partner.created.Address {street = partnerItem.street, city = partnerItem.city};
                var partnerCreated = new PartnerCreated{id = partnerItem.id.ToString(), Name = partnerName, Address = partnerAddress};
                producerCreated
                        .ProduceAsync("PartnerCreated", new Message<String, PartnerCreated> { Key = partnerItem.id.ToString(), Value = partnerCreated})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }
    }
}