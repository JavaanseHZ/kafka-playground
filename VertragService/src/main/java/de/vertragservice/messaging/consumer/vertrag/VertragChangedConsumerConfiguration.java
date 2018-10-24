package de.vertragservice.messaging.consumer.vertrag;

import de.vertrag.kafkaevent.changed.VertragChanged;
import de.vertragservice.messaging.consumer.ConsumerConfiguration;
import io.confluent.kafka.serializers.KafkaAvroDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

@Configuration
public class VertragChangedConsumerConfiguration extends ConsumerConfiguration {

    private ConsumerFactory<String, VertragChanged> vertragChangedConsumerFactory() {
        return new DefaultKafkaConsumerFactory(consumerFactoryProperties(), new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()),
                new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, VertragChanged>
    vertragChangedKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, VertragChanged> factory
                = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(vertragChangedConsumerFactory());
        return factory;
    }
}
