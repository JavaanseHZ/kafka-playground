using System;
using Confluent.Kafka;
using PartnerService.Models;
using Confluent.Kafka.Serialization;
using de.partner;

namespace PartnerService.Controllers {
    public class PartnerProducer {
        private AvroSerdeProvider serdeProvider;
        private  Producer<long, PartnerCreated> producer;
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
            producer = new Producer<long, PartnerCreated>(producerConfig, serdeProvider.GetSerializerGenerator<long>(), serdeProvider.GetSerializerGenerator<PartnerCreated>());
        }

        public void sendEvent(PartnerItem partnerItem) {
            Action<DeliveryReportResult<long, PartnerCreated>> handler = r => 
                Console.WriteLine(!r.Error.IsError
                    ? $"Delivered message to {r.TopicPartitionOffset}"
                    : $"Delivery Error: {r.Error.Reason}");
               
                var partnerName = new Name {firstname = partnerItem.firstname, lastname = partnerItem.lastname};
                var partnerAddress = new Address {street = partnerItem.street, city = partnerItem.city};
                var partnerCreated = new PartnerCreated{id = partnerItem.id, Name = partnerName};
                producer
                        .ProduceAsync("partnerCreated", new Message<long, PartnerCreated> { Key = partnerItem.id, Value = partnerCreated})
                        .ContinueWith(task => task.IsFaulted
                            ? $"error producing message: {task.Exception.Message}"
                            : $"produced to: {task.Result.TopicPartitionOffset}");
        }
    }
}