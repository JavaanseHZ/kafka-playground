package de.contract.messaging.consumer.contract;

import de.contract.kafkacommand.delete.DeleteContract;
import de.contract.messaging.consumer.ConsumerConfiguration;
import io.confluent.kafka.serializers.KafkaAvroDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

@Configuration
public class DeleteContractConsumerConfiguration extends ConsumerConfiguration {

    private ConsumerFactory<String, DeleteContract> deletecontractConsumerFactory() {
        return new DefaultKafkaConsumerFactory(consumerFactoryProperties(), new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()),
                new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, DeleteContract>
    deletecontractKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, DeleteContract> factory
                = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(deletecontractConsumerFactory());
        return factory;
    }
}
