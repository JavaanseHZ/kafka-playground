package de.contract.messaging.consumer.contract;

import de.contract.kafkacommand.delete.DeleteContract;
import de.contract.messaging.producer.contract.ContractDeletedProducer;
import de.contract.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaHandler;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@KafkaListener(topics = "${kafka.consumer.topic.command.contract.delete}", containerFactory = "deletecontractKafkaListenerContainerFactory")
public class DeleteContractConsumer {

    @Autowired
    private ContractRepository contractRepository;

    @Autowired
    private ContractDeletedProducer contractDeletedProducer;

    @KafkaHandler
    public void receiveDeleteContract(DeleteContract deleteContract) {
        contractRepository.findById(UUID.fromString(deleteContract.getId()))
            .ifPresent(foundContract -> {
                    contractRepository.delete(foundContract);
                    contractDeletedProducer.sendEvent(foundContract.getId().toString(), foundContract);
                }
            );
    }
}