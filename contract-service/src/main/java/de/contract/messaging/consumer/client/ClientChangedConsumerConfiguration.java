package de.contract.messaging.consumer.client;

import de.client.kafkaevent.changed.ClientChanged;
import de.contract.messaging.consumer.ConsumerConfiguration;
import io.confluent.kafka.serializers.KafkaAvroDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

@Configuration
public class ClientChangedConsumerConfiguration extends ConsumerConfiguration {

    private ConsumerFactory<String, ClientChanged> clientChangedConsumerFactory() {
        return new DefaultKafkaConsumerFactory(consumerFactoryProperties(), new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()),
                new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, ClientChanged>
    clientChangedKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, ClientChanged> factory
                = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(clientChangedConsumerFactory());
        return factory;
    }
}
