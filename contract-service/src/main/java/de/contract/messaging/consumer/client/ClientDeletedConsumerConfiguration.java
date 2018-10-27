package de.contract.messaging.consumer.client;

import de.client.kafkaevent.deleted.ClientDeleted;
import de.contract.messaging.consumer.ConsumerConfiguration;
import io.confluent.kafka.serializers.KafkaAvroDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

@Configuration
public class ClientDeletedConsumerConfiguration extends ConsumerConfiguration {

    private ConsumerFactory<String, ClientDeleted> clientDeletedConsumerFactory() {
        return new DefaultKafkaConsumerFactory(consumerFactoryProperties(), new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()),
                new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, ClientDeleted>
    clientDeletedKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, ClientDeleted> factory
                = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(clientDeletedConsumerFactory());
        return factory;
    }
}
