package de.vertragservice.messaging.producer;

import de.vertrag.created.VertragCreated;
import io.confluent.kafka.serializers.AbstractKafkaAvroSerDeConfig;
import io.confluent.kafka.serializers.KafkaAvroSerializer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class VertragCreatedProducerConfiguration extends ProducerConfiguration{

    private ProducerFactory<String, VertragCreated> vertragCreatedProducerFactory() {
        DefaultKafkaProducerFactory<String, VertragCreated> producerFactory = new DefaultKafkaProducerFactory<>(producerFactoryProperties());
        return producerFactory;
    }

    @Bean
    public KafkaTemplate<String, VertragCreated> kafkaTemplateVertragCreated() {
        return new KafkaTemplate<>(vertragCreatedProducerFactory());
    }
}
