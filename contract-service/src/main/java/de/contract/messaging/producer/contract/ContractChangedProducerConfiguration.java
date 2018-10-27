package de.contract.messaging.producer.contract;

import de.contract.kafkaevent.changed.ContractChanged;
import de.contract.messaging.producer.ProducerConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

@Configuration
public class ContractChangedProducerConfiguration extends ProducerConfiguration {

    private ProducerFactory<String, ContractChanged> contractChangedProducerFactory() {
        DefaultKafkaProducerFactory<String, ContractChanged> producerFactory = new DefaultKafkaProducerFactory<>(producerFactoryProperties());
        return producerFactory;
    }

    @Bean
    public KafkaTemplate<String, ContractChanged> kafkaTemplateContractChanged() {
        return new KafkaTemplate<>(contractChangedProducerFactory());
    }
}
