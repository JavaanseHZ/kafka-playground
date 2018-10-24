package de.vertragservice.messaging.producer;

import de.vertrag.kafkacommand.delete.DeleteVertrag;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

@Configuration
public class DeleteVertragProducerConfiguration extends ProducerConfiguration{

    private ProducerFactory<String, DeleteVertrag> deleteVertragProducerFactory() {
        DefaultKafkaProducerFactory<String, DeleteVertrag> producerFactory = new DefaultKafkaProducerFactory<>(producerFactoryProperties());
        return producerFactory;
    }

    @Bean
    public KafkaTemplate<String, DeleteVertrag> kafkaTemplateDeleteVertrag() {
        return new KafkaTemplate<>(deleteVertragProducerFactory());
    }
}
