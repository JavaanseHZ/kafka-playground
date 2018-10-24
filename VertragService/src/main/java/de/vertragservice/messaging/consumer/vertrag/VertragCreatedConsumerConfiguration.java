package de.vertragservice.messaging.consumer.vertrag;

import de.vertrag.kafkaevent.created.VertragCreated;
import de.vertragservice.messaging.consumer.ConsumerConfiguration;
import io.confluent.kafka.serializers.KafkaAvroDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

public class VertragCreatedConsumerConfiguration extends ConsumerConfiguration {

    private ConsumerFactory<String, VertragCreated> vertragCreatedConsumerFactory() {
        return new DefaultKafkaConsumerFactory(consumerFactoryProperties(), new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()),
                new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, VertragCreated>
    vertragCreatedKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, VertragCreated> factory
                = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(vertragCreatedConsumerFactory());
        return factory;
    }
}
