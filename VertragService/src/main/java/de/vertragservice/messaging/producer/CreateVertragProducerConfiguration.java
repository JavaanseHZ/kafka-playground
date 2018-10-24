package de.vertragservice.messaging.producer;

import de.vertrag.kafkacommand.create.CreateVertrag;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

@Configuration
public class CreateVertragProducerConfiguration extends ProducerConfiguration{

    private ProducerFactory<String, CreateVertrag> createVertragProducerFactory() {
        DefaultKafkaProducerFactory<String, CreateVertrag> producerFactory = new DefaultKafkaProducerFactory<>(producerFactoryProperties());
        return producerFactory;
    }

    @Bean
    public KafkaTemplate<String, CreateVertrag> kafkaTemplateCreateVertrag() {
        return new KafkaTemplate<>(createVertragProducerFactory());
    }
}
