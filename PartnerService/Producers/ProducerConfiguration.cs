using Confluent.Kafka;
using Confluent.Kafka.Serialization;

namespace PartnerService.Producers {
    public class ProducerConfiguration {

        public  ProducerConfig producerConfig = new ProducerConfig {
            BootstrapServers = "localhost:9092"
        };

        public AvroSerdeProviderConfig avroConfig = new AvroSerdeProviderConfig {
            SchemaRegistryUrl = "http://localhost:8081",
            SchemaRegistryRequestTimeoutMs = 5000,
            SchemaRegistryMaxCachedSchemas = 10,
            AvroSerializerBufferBytes = 50,
            AvroSerializerAutoRegisterSchemas = true
        };
    }
}