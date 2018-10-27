using System;
using Confluent.Kafka;
using Confluent.Kafka.Serialization;

namespace client.producers {
    public class ProducerConfiguration {

        public  ProducerConfig producerConfig = new ProducerConfig {
             BootstrapServers = string.IsNullOrEmpty(Environment.GetEnvironmentVariable("KAFKA_HOST")) ?
                "localhost:9092" : Environment.GetEnvironmentVariable("KAFKA_HOST") + ":9092",
        };

        public AvroSerdeProviderConfig avroConfig = new AvroSerdeProviderConfig {
             SchemaRegistryUrl =  string.IsNullOrEmpty(Environment.GetEnvironmentVariable("KAFKA_HOST")) ?
                "http://localhost:8081" : "http://" + Environment.GetEnvironmentVariable("KAFKA_HOST") + ":8081",
            SchemaRegistryRequestTimeoutMs = 5000,
            SchemaRegistryMaxCachedSchemas = 10,
            AvroSerializerBufferBytes = 50,
            AvroSerializerAutoRegisterSchemas = true
        };
    }
}