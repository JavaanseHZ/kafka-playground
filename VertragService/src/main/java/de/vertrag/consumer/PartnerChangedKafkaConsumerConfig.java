package de.vertrag.consumer;

import de.partner.changed.PartnerChanged;
import io.confluent.kafka.schemaregistry.client.CachedSchemaRegistryClient;
import io.confluent.kafka.schemaregistry.client.SchemaRegistryClient;
import io.confluent.kafka.serializers.AbstractKafkaAvroSerDeConfig;
import io.confluent.kafka.serializers.KafkaAvroDeserializer;
import io.confluent.kafka.serializers.KafkaAvroDeserializerConfig;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class PartnerChangedKafkaConsumerConfig {

    @Value(value = "${kafka.bootstrap.address}")
    private String bootstrapAddress;

    @Value(value = "${kafka.schemaregistry.address}")
    private String registryAddress;

    @Value(value = "${kafka.consumer.group.id}")
    private String groupId;

    @Value(value = "${kafka.consumer.offset}")
    private String offset;

    @Bean
    public ConsumerFactory<String, PartnerChanged> partnerChangedConsumerFactory() {
        Map<String, Object> consumerFactoryProps = new HashMap<>();
        consumerFactoryProps.put(
                ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG,
                bootstrapAddress);
        consumerFactoryProps.put(
                ConsumerConfig.GROUP_ID_CONFIG,
                groupId);
        consumerFactoryProps.put(
                ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG,
                StringDeserializer.class);
        consumerFactoryProps.put(
                ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG,
                KafkaAvroDeserializer.class);
        consumerFactoryProps.put(
                ConsumerConfig.AUTO_OFFSET_RESET_CONFIG,
                offset);
        consumerFactoryProps.put(
                AbstractKafkaAvroSerDeConfig.SCHEMA_REGISTRY_URL_CONFIG,
                registryAddress);

        SchemaRegistryClient client = new CachedSchemaRegistryClient(registryAddress, 10);

        Map<String, Object> deserializerProps = new HashMap<>();
        deserializerProps.put(
                KafkaAvroDeserializerConfig.SPECIFIC_AVRO_READER_CONFIG,
                true);
        deserializerProps.put(
                AbstractKafkaAvroSerDeConfig.SCHEMA_REGISTRY_URL_CONFIG,
                registryAddress);
        return new DefaultKafkaConsumerFactory(consumerFactoryProps, new StringDeserializer(),
                new KafkaAvroDeserializer(client, deserializerProps));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, PartnerChanged>
    partnerChangedKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, PartnerChanged> factory
                = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(partnerChangedConsumerFactory());
        return factory;
    }

}