package de.vertrag.consumer;

import de.partner.changed.PartnerChanged;
import io.confluent.kafka.schemaregistry.client.CachedSchemaRegistryClient;
import io.confluent.kafka.schemaregistry.client.SchemaRegistryClient;
import io.confluent.kafka.serializers.AbstractKafkaAvroSerDeConfig;
import io.confluent.kafka.serializers.KafkaAvroDeserializer;
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

    @Value(value = "${kafka.group.id}")
    private String groupId;

    @Value(value = "${kafka.schemaregistry.address}")
    private String registryAddress;

    @Bean
    public ConsumerFactory<String, PartnerChanged> partnerDeletedConsumerFactory() {
        Map<String, Object> props = new HashMap<>();
        props.put(
                ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG,
                bootstrapAddress);
        props.put(
                ConsumerConfig.GROUP_ID_CONFIG,
                groupId);
        props.put(
                ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG,
                StringDeserializer.class);
        props.put(
                ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG,
                KafkaAvroDeserializer.class);
        props.put(AbstractKafkaAvroSerDeConfig.SCHEMA_REGISTRY_URL_CONFIG, registryAddress);

        SchemaRegistryClient client = new CachedSchemaRegistryClient(registryAddress, 10);

        return new DefaultKafkaConsumerFactory(props, new StringDeserializer(),
                new KafkaAvroDeserializer(client));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, PartnerChanged>
    partnerChangedKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, PartnerChanged> factory
                = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(partnerDeletedConsumerFactory());
        return factory;
    }

}