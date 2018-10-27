package de.contract.messaging.producer.contract;

import de.contract.kafkacommand.delete.DeleteContract;
import de.contract.messaging.producer.ProducerConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

@Configuration
public class DeleteContractProducerConfiguration extends ProducerConfiguration {

    private ProducerFactory<String, DeleteContract> deleteContractProducerFactory() {
        DefaultKafkaProducerFactory<String, DeleteContract> producerFactory = new DefaultKafkaProducerFactory<>(producerFactoryProperties());
        return producerFactory;
    }

    @Bean
    public KafkaTemplate<String, DeleteContract> kafkaTemplateDeleteContract() {
        return new KafkaTemplate<>(deleteContractProducerFactory());
    }
}
