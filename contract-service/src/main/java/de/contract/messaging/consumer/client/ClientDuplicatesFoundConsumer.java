package de.contract.messaging.consumer.client;

import de.client.kafkaevent.dubletten.ClientdublettenFound;
import de.contract.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaHandler;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@KafkaListener(topics = "${kafka.consumer.topic.client.dublettenfound}", containerFactory = "clientdublettenFoundKafkaListenerContainerFactory")
public class ClientDuplicatesFoundConsumer {

    @Autowired
    private ContractRepository contractRepository;

    @KafkaHandler
    public void receiveClientdublettenFound(ClientdublettenFound clientdublettenFound) {
        contractRepository.findAll()
            .forEach( contract -> {
                if(contract.getClient().getId().equals(UUID.fromString(clientdublettenFound.getOldclientid()))){
                    contract.getClient().setId(UUID.fromString(clientdublettenFound.getNewclientid()));
                    contractRepository.save(contract);
                }
            }

        );
    }
}