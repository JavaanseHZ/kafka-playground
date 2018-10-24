using PartnerService.Models;
using System.Threading;
using System;
using Confluent.Kafka;
using Confluent.Kafka.Serialization;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PartnerService.Consumers {
    public class ConsumerConfiguration {
       
        public ConsumerConfig consumerConfig = new ConsumerConfig { 
            GroupId = "partnerGroup",
            BootstrapServers = "localhost:9092",
            AutoOffsetReset = AutoOffsetResetType.Earliest
        };

        public AvroSerdeProviderConfig avroConfig = new AvroSerdeProviderConfig {
            SchemaRegistryUrl = "http://localhost:8081",
            SchemaRegistryRequestTimeoutMs = 5000,
            SchemaRegistryMaxCachedSchemas = 10
        };

    }
}