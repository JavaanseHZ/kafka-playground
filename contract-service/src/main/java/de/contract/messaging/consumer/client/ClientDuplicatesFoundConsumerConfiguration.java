package de.contract.messaging.consumer.client;

import de.client.kafkaevent.duplicates.ClientDuplicatesFound;
import de.contract.messaging.consumer.ConsumerConfiguration;
import io.confluent.kafka.serializers.KafkaAvroDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

@Configuration
public class ClientDuplicatesFoundConsumerConfiguration extends ConsumerConfiguration {

    private ConsumerFactory<String, ClientDuplicatesFound> clientDuplicatesFoundConsumerFactory() {
        return new DefaultKafkaConsumerFactory(consumerFactoryProperties(), new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()),
                new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, ClientDuplicatesFound>
    clientDuplicatesFoundKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, ClientDuplicatesFound> factory
                = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(clientDuplicatesFoundConsumerFactory());
        return factory;
    }
}
