package de.vertragservice.messaging.producer.vertrag;

import de.vertrag.kafkaevent.created.VertragCreated;
import de.vertragservice.messaging.producer.ProducerConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

@Configuration
public class VertragCreatedProducerConfiguration extends ProducerConfiguration {

    private ProducerFactory<String, VertragCreated> VertragCreatedProducerFactory() {
        DefaultKafkaProducerFactory<String, VertragCreated> producerFactory = new DefaultKafkaProducerFactory<>(producerFactoryProperties());
        return producerFactory;
    }

    @Bean
    public KafkaTemplate<String, VertragCreated> kafkaTemplateVertragCreated() {
        return new KafkaTemplate<>(VertragCreatedProducerFactory());
    }
}
