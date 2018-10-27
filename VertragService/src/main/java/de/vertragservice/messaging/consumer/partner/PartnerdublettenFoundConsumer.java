package de.vertragservice.messaging.consumer.partner;

import de.partner.kafkaevent.dubletten.PartnerdublettenFound;
import de.vertragservice.repository.VertragRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaHandler;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@KafkaListener(topics = "${kafka.consumer.topic.partner.dublettenfound}", containerFactory = "partnerdublettenFoundKafkaListenerContainerFactory")
public class PartnerdublettenFoundConsumer {

    @Autowired
    private VertragRepository vertragRepository;

    @KafkaHandler
    public void receivePartnerdublettenFound(PartnerdublettenFound partnerdublettenFound) {
        vertragRepository.findAll()
            .forEach( vertrag -> {
                if(vertrag.getPartner().getId().equals(UUID.fromString(partnerdublettenFound.getOldpartnerid()))){
                    vertrag.getPartner().setId(UUID.fromString(partnerdublettenFound.getNewpartnerid()));
                    vertragRepository.save(vertrag);
                }
            }

        );
    }
}