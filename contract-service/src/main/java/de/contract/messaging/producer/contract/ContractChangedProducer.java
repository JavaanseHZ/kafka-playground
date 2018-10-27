package de.contract.messaging.producer.contract;

import de.contract.kafkaevent.changed.Client;
import de.contract.kafkaevent.changed.ContractChanged;
import de.contract.model.Contract;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class ContractChangedProducer {

    @Value("${kafka.producer.topic.event.contract.changed}")
    private String topic;

    @Autowired
    private KafkaTemplate<String, ContractChanged> kafkaTemplateContractChanged;

    public void sendEvent(String uuid, Contract contract) {
        ContractChanged contractChanged = new ContractChanged();
        contractChanged.setId(contract.getId().toString());
        contractChanged.setPremium(contract.getPremium());
        contractChanged.setType(contract.getType());
        Client client = new Client();
        client.setId(contract.getClient().getId().toString());
        client.setFirstname(contract.getClient().getFirstname());
        client.setLastname(contract.getClient().getLastname());
        contractChanged.setClient(client);
        kafkaTemplateContractChanged.send(topic, uuid, contractChanged);
    }
}
