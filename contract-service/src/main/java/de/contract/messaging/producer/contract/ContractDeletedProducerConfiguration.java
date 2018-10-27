package de.contract.messaging.producer.contract;

import de.contract.kafkaevent.deleted.ContractDeleted;
import de.contract.messaging.producer.ProducerConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

@Configuration
public class ContractDeletedProducerConfiguration extends ProducerConfiguration {

    private ProducerFactory<String, ContractDeleted> contractDeletedProducerFactory() {
        DefaultKafkaProducerFactory<String, ContractDeleted> producerFactory = new DefaultKafkaProducerFactory<>(producerFactoryProperties());
        return producerFactory;
    }

    @Bean
    public KafkaTemplate<String, ContractDeleted> kafkaTemplateContractDeleted() {
        return new KafkaTemplate<>(contractDeletedProducerFactory());
    }
}
