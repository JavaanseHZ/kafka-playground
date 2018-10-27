package de.contract.messaging.producer.contract;

import de.contract.kafkaevent.created.Client;
import de.contract.kafkaevent.created.ContractCreated;
import de.contract.model.Contract;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class ContractCreatedProducer {

    @Value("${kafka.producer.topic.event.contract.created}")
    private String topic;

    @Autowired
    private KafkaTemplate<String, ContractCreated> kafkaTemplateContractCreated;

    public void sendEvent(String uuid, Contract contract) {
        ContractCreated contractCreated = new ContractCreated();
        contractCreated.setId(contract.getId().toString());
        contractCreated.setPremium(contract.getPremium());
        contractCreated.setType(contract.getType());
        Client client = new Client();
        client.setId(contract.getClient().getId().toString());
        client.setFirstname(contract.getClient().getFirstname());
        client.setLastname(contract.getClient().getLastname());
        contractCreated.setClient(client);
        kafkaTemplateContractCreated.send(topic, uuid, contractCreated);
    }
}
