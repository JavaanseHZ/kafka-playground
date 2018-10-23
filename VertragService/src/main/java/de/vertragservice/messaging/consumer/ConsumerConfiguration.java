package de.vertragservice.messaging.consumer;

import io.confluent.kafka.schemaregistry.client.CachedSchemaRegistryClient;
import io.confluent.kafka.schemaregistry.client.SchemaRegistryClient;
import io.confluent.kafka.serializers.AbstractKafkaAvroSerDeConfig;
import io.confluent.kafka.serializers.KafkaAvroDeserializerConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@Configuration
public class ConsumerConfiguration {

    @Value(value = "${kafka.bootstrap.address}")
    protected String bootstrapAddress;

    @Value(value = "${kafka.schemaregistry.address}")
    protected String registryAddress;

    @Value(value = "${kafka.consumer.group.id}")
    protected String groupId;

    @Value(value = "${kafka.consumer.offset}")
    protected String offset;

    protected SchemaRegistryClient schemaRegistryClient;

    @PostConstruct
    private void initializeSchemaRegistryClient() {
        schemaRegistryClient = new CachedSchemaRegistryClient(registryAddress, 10);
    }

    protected Map<String, Object> avroDeserializerProps() {
        Map<String, Object> deserializerProps = new HashMap<>();
        deserializerProps.put(
                KafkaAvroDeserializerConfig.SPECIFIC_AVRO_READER_CONFIG,
                true);
        deserializerProps.put(
                AbstractKafkaAvroSerDeConfig.SCHEMA_REGISTRY_URL_CONFIG,
                registryAddress);
        return deserializerProps;
    }
}