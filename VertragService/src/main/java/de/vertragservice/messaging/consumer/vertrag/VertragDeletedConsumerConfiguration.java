package de.vertragservice.messaging.consumer.vertrag;

import de.vertrag.kafkaevent.deleted.VertragDeleted;
import de.vertragservice.messaging.consumer.ConsumerConfiguration;
import io.confluent.kafka.serializers.KafkaAvroDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

@Configuration
public class VertragDeletedConsumerConfiguration extends ConsumerConfiguration {

    private ConsumerFactory<String, VertragDeleted> vertragDeletedConsumerFactory() {
        return new DefaultKafkaConsumerFactory(consumerFactoryProperties(), new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()),
                new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, VertragDeleted>
    vertragDeletedKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, VertragDeleted> factory
                = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(vertragDeletedConsumerFactory());
        return factory;
    }
}
