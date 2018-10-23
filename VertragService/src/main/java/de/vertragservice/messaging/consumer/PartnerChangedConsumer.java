package de.vertragservice.messaging.consumer;


import de.partner.changed.PartnerChanged;
import de.vertragservice.repository.VertragRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaHandler;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@KafkaListener(topics = "${kafka.consumer.topic.partner.changed}", containerFactory = "partnerChangedKafkaListenerContainerFactory")
public class PartnerChangedConsumer {

    @Autowired
    private VertragRepository vertragRepository;

    @KafkaHandler
    public void receivePartnerChanged(PartnerChanged partnerChanged) {
        partnerChanged.getId();
        vertragRepository.findAll()
            .forEach( vertrag -> {
                if(vertrag.getPartner().getId().equals(UUID.fromString(partnerChanged.getId()))){
                    vertrag.getPartner().setNachname(partnerChanged.getName().getLastname());
                    vertrag.getPartner().setVorname(partnerChanged.getName().getFirstname());
                    vertragRepository.save(vertrag);
                }
            }

        );
    }
}