package de.contract.messaging.consumer.client;

import de.client.kafkaevent.dubletten.ClientDuplicatesFound;
import de.contract.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaHandler;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@KafkaListener(topics = "${kafka.consumer.topic.event.client.duplicatesfound}", containerFactory = "clientDuplicatesFoundKafkaListenerContainerFactory")
public class ClientDuplicatesFoundConsumer {

    @Autowired
    private ContractRepository contractRepository;

    @KafkaHandler
    public void receiveClientDuplicatesFound(ClientDuplicatesFound clientDuplicatesFound) {
        contractRepository.findAll()
            .forEach( contract -> {
                if(contract.getClient().getId().equals(UUID.fromString(clientDuplicatesFound.getOldclientid()))){
                    contract.getClient().setId(UUID.fromString(clientDuplicatesFound.getNewclientid()));
                    contractRepository.save(contract);
                }
            }

        );
    }
}