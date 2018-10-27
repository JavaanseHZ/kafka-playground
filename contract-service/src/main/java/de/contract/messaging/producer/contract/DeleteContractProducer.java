package de.contract.messaging.producer.contract;

import de.contract.kafkacommand.delete.DeleteContract;
import de.contract.model.Contract;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class DeleteContractProducer {

    @Value("${kafka.producer.topic.command.contract.delete}")
    private String topic;

    @Autowired
    private KafkaTemplate<String, DeleteContract> kafkaTemplateDeleteContract;

    public void sendEvent(String uuid, Contract contract) {
        DeleteContract deleteContract = new DeleteContract();
        deleteContract.setId(contract.getId().toString());
        kafkaTemplateDeleteContract.send(topic, uuid, deleteContract);
    }
}
