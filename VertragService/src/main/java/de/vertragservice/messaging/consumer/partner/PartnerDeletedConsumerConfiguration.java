package de.vertragservice.messaging.consumer.partner;

import de.partner.kafkaevent.deleted.PartnerDeleted;
import de.vertragservice.messaging.consumer.ConsumerConfiguration;
import io.confluent.kafka.serializers.KafkaAvroDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

@Configuration
public class PartnerDeletedConsumerConfiguration extends ConsumerConfiguration {

    private ConsumerFactory<String, PartnerDeleted> partnerDeletedConsumerFactory() {
        return new DefaultKafkaConsumerFactory(consumerFactoryProperties(), new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()),
                new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, PartnerDeleted>
    partnerDeletedKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, PartnerDeleted> factory
                = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(partnerDeletedConsumerFactory());
        return factory;
    }
}
