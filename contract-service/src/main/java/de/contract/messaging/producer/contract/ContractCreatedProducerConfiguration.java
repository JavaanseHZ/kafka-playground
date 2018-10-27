package de.contract.messaging.producer.contract;

import de.contract.kafkaevent.created.ContractCreated;
import de.contract.messaging.producer.ProducerConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

@Configuration
public class ContractCreatedProducerConfiguration extends ProducerConfiguration {

    private ProducerFactory<String, ContractCreated> ContractCreatedProducerFactory() {
        DefaultKafkaProducerFactory<String, ContractCreated> producerFactory = new DefaultKafkaProducerFactory<>(producerFactoryProperties());
        return producerFactory;
    }

    @Bean
    public KafkaTemplate<String, ContractCreated> kafkaTemplateContractCreated() {
        return new KafkaTemplate<>(ContractCreatedProducerFactory());
    }
}
