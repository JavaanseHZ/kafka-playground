package de.vertragservice.messaging.producer.vertrag;

import de.vertrag.kafkaevent.changed.VertragChanged;
import de.vertragservice.messaging.producer.ProducerConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

@Configuration
public class VertragChangedProducerConfiguration extends ProducerConfiguration {

    private ProducerFactory<String, VertragChanged> vertragChangedProducerFactory() {
        DefaultKafkaProducerFactory<String, VertragChanged> producerFactory = new DefaultKafkaProducerFactory<>(producerFactoryProperties());
        return producerFactory;
    }

    @Bean
    public KafkaTemplate<String, VertragChanged> kafkaTemplateVertragChanged() {
        return new KafkaTemplate<>(vertragChangedProducerFactory());
    }
}
