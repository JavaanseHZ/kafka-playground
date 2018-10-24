package de.vertragservice.messaging.producer;

import de.vertrag.kafkacommand.change.ChangeVertrag;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

@Configuration
public class ChangeVertragProducerConfiguration extends ProducerConfiguration{

    private ProducerFactory<String, ChangeVertrag> changeVertragProducerFactory() {
        DefaultKafkaProducerFactory<String, ChangeVertrag> producerFactory = new DefaultKafkaProducerFactory<>(producerFactoryProperties());
        return producerFactory;
    }

    @Bean
    public KafkaTemplate<String, ChangeVertrag> kafkaTemplateChangeVertrag() {
        return new KafkaTemplate<>(changeVertragProducerFactory());
    }
}
