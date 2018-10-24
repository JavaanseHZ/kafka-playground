package de.vertragservice.messaging.consumer.vertrag;

import de.vertrag.kafkaevent.changed.VertragChanged;
import de.vertragservice.repository.VertragRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaHandler;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@KafkaListener(topics = "${kafka.consumer.topic.vertrag.changed}", containerFactory = "vertragChangedKafkaListenerContainerFactory")
public class VertragChangedConsumer {

    @Autowired
    private VertragRepository vertragRepository;

    @KafkaHandler
    public void receiveVertragChanged(VertragChanged vertragChanged) {
        vertragChanged.getId();
        vertragRepository.findById(UUID.fromString(vertragChanged.getId()))
            .ifPresent( vertrag -> {
                vertrag.getPartner().setNachname(vertragChanged.getPartner().getLastname());
                vertrag.getPartner().setVorname(vertragChanged.getPartner().getFirstname());
                vertrag.getPartner().setId(UUID.fromString(vertragChanged.getPartner().getId()));
                vertrag.setBeitrag(vertragChanged.getBeitrag());
                vertrag.setSparte(vertragChanged.getSparte());
                vertragRepository.save(vertrag);
            }
        );
    }
}
