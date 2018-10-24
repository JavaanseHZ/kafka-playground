package de.vertragservice.messaging.consumer.partner;

import de.partner.kafkaevent.changed.PartnerChanged;
import de.vertragservice.messaging.consumer.ConsumerConfiguration;
import io.confluent.kafka.serializers.KafkaAvroDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

@Configuration
public class PartnerChangedConsumerConfiguration extends ConsumerConfiguration {

    private ConsumerFactory<String, PartnerChanged> partnerChangedConsumerFactory() {
        return new DefaultKafkaConsumerFactory(consumerFactoryProperties(), new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()),
                new KafkaAvroDeserializer(schemaRegistryClient, avroDeserializerProps()));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, PartnerChanged>
    partnerChangedKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, PartnerChanged> factory
                = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(partnerChangedConsumerFactory());
        return factory;
    }
}
