package de.contract.messaging.consumer;

import io.confluent.kafka.schemaregistry.client.CachedSchemaRegistryClient;
import io.confluent.kafka.schemaregistry.client.SchemaRegistryClient;
import io.confluent.kafka.serializers.AbstractKafkaAvroSerDeConfig;
import io.confluent.kafka.serializers.KafkaAvroDeserializer;
import io.confluent.kafka.serializers.KafkaAvroDeserializerConfig;
import org.apache.kafka.clients.consumer.ConsumerConfig;
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

    protected Map<String, Object> consumerFactoryProperties() {
        Map<String, Object> consumerFactoryProps = new HashMap<>();
        consumerFactoryProps.put(
                ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG,
                bootstrapAddress);
        consumerFactoryProps.put(
                ConsumerConfig.GROUP_ID_CONFIG,
                groupId);
        consumerFactoryProps.put(
                ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG,
                KafkaAvroDeserializer.class);
        consumerFactoryProps.put(
                ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG,
                KafkaAvroDeserializer.class);
        consumerFactoryProps.put(
                ConsumerConfig.AUTO_OFFSET_RESET_CONFIG,
                offset);
        consumerFactoryProps.put(
                AbstractKafkaAvroSerDeConfig.SCHEMA_REGISTRY_URL_CONFIG,
                registryAddress);
        return consumerFactoryProps;
    }
}