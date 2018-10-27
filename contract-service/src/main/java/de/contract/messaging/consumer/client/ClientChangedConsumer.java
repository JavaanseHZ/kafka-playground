package de.contract.messaging.consumer.client;

import de.client.kafkaevent.changed.ClientChanged;
import de.contract.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaHandler;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@KafkaListener(topics = "${kafka.consumer.topic.client.changed}", containerFactory = "clientChangedKafkaListenerContainerFactory")
public class ClientChangedConsumer {

    @Autowired
    private ContractRepository contractRepository;

    @KafkaHandler
    public void receiveClientChanged(ClientChanged clientChanged) {
        contractRepository.findAll()
            .forEach( contract -> {
                if(contract.getClient().getId().equals(UUID.fromString(clientChanged.getId()))){
                    contract.getClient().setLastname(clientChanged.getName().getLastname());
                    contract.getClient().setFirstname(clientChanged.getName().getFirstname());
                    contractRepository.save(contract);
                }
            }

        );
    }
}