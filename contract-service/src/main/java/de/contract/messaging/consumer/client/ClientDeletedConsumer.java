package de.contract.messaging.consumer.client;

import de.client.kafkaevent.deleted.ClientDeleted;
import de.contract.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaHandler;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@KafkaListener(topics = "${kafka.consumer.topic.client.deleted}", containerFactory = "clientDeletedKafkaListenerContainerFactory")
public class ClientDeletedConsumer {

    @Autowired
    private ContractRepository contractRepository;

    @KafkaHandler
    public void receiveClientDeleted(ClientDeleted clientDeleted) {
        contractRepository.findAll()
            .forEach( contract -> {
                if(contract.getClient().getId().equals(UUID.fromString(clientDeleted.getId()))){
                    contractRepository.delete(contract);
                }
            }

        );
    }
}