package de.vertragservice.messaging.consumer.vertrag;

import de.vertrag.kafkaevent.deleted.VertragDeleted;
import de.vertragservice.model.Vertrag;
import de.vertragservice.repository.VertragRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaHandler;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@KafkaListener(topics = "${kafka.consumer.topic.vertrag.deleted}", containerFactory = "vertragDeletedKafkaListenerContainerFactory")
public class VertragDeletedConsumer {

    @Autowired
    private VertragRepository vertragRepository;

    @KafkaHandler
    public void receiveVertragDeleted(VertragDeleted vertragDeleted) {
        vertragRepository.findById(UUID.fromString(vertragDeleted.getId()))
            .ifPresent(vertragRepository::delete);
    }
}
