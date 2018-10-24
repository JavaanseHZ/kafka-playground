package de.vertragservice.messaging.consumer.vertrag;

import de.vertrag.kafkaevent.created.VertragCreated;
import de.vertragservice.model.Vertrag;
import de.vertragservice.repository.VertragRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaHandler;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@KafkaListener(topics = "${kafka.consumer.topic.vertrag.created}", containerFactory = "vertragCreatedKafkaListenerContainerFactory")
public class VertragCreatedConsumer {

    @Autowired
    private VertragRepository vertragRepository;

    @KafkaHandler
    public void receiveVertragCreated(VertragCreated vertragCreated) {
        Vertrag vertrag = new Vertrag();
        vertrag.setId(UUID.fromString(vertragCreated.getId()));
        vertrag.getPartner().setNachname(vertragCreated.getPartner().getLastname());
        vertrag.getPartner().setVorname(vertragCreated.getPartner().getFirstname());
        vertrag.getPartner().setId(UUID.fromString(vertragCreated.getPartner().getId()));
        vertrag.setBeitrag(vertragCreated.getBeitrag());
        vertrag.setSparte(vertragCreated.getSparte());
        vertragRepository.save(vertrag);
    }
}
