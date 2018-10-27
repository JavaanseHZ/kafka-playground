package de.vertragservice.messaging.producer.vertrag;

import de.vertrag.kafkaevent.deleted.VertragDeleted;
import de.vertragservice.messaging.producer.ProducerConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

@Configuration
public class VertragDeletedProducerConfiguration extends ProducerConfiguration {

    private ProducerFactory<String, VertragDeleted> vertragDeletedProducerFactory() {
        DefaultKafkaProducerFactory<String, VertragDeleted> producerFactory = new DefaultKafkaProducerFactory<>(producerFactoryProperties());
        return producerFactory;
    }

    @Bean
    public KafkaTemplate<String, VertragDeleted> kafkaTemplateVertragDeleted() {
        return new KafkaTemplate<>(vertragDeletedProducerFactory());
    }
}
