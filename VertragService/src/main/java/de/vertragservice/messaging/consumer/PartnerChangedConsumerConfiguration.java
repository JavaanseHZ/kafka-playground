package de.vertragservice.messaging.consumer;

import de.partner.changed.PartnerChanged;
import io.confluent.kafka.serializers.AbstractKafkaAvroSerDeConfig;
import io.confluent.kafka.serializers.KafkaAvroDeserializer;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class PartnerChangedConsumerConfiguration extends ConsumerConfiguration{

    private ConsumerFactory<String, PartnerChanged> partnerChangedConsumerFactory() {
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

        return new DefaultKafkaConsumerFactory(consumerFactoryProps, new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()),
                new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()));
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
