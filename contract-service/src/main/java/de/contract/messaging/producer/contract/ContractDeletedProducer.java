package de.contract.messaging.producer.contract;

import de.contract.kafkaevent.deleted.ContractDeleted;
import de.contract.model.Contract;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class ContractDeletedProducer {

    @Value("${kafka.producer.topic.contract.deleted}")
    private String topic;

    @Autowired
    private KafkaTemplate<String, ContractDeleted> kafkaTemplateContractDeleted;

    public void sendEvent(String uuid, Contract contract) {
        ContractDeleted contractDeleted = new ContractDeleted();
        contractDeleted.setId(contract.getId().toString());
        kafkaTemplateContractDeleted.send(topic, uuid, contractDeleted);
    }
}
