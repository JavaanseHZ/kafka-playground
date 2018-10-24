package de.vertragservice.messaging.producer.vertrag;

import de.vertrag.kafkaevent.created.Partner;
import de.vertrag.kafkaevent.created.VertragCreated;
import de.vertragservice.model.Vertrag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class VertragCreatedProducer {

    @Value("${kafka.producer.topic.vertrag.created}")
    private String topic;

    @Autowired
    private KafkaTemplate<String, VertragCreated> kafkaTemplateVertragCreated;

    public void sendEvent(String uuid, Vertrag vertrag) {
        VertragCreated vertragCreated = new VertragCreated();
        vertragCreated.setId(vertrag.getId().toString());
        vertragCreated.setBeitrag(vertrag.getBeitrag());
        vertragCreated.setSparte(vertrag.getSparte());
        Partner partner = new Partner();
        partner.setId(vertrag.getPartner().getId().toString());
        partner.setFirstname(vertrag.getPartner().getVorname());
        partner.setLastname(vertrag.getPartner().getNachname());
        vertragCreated.setPartner(partner);
        kafkaTemplateVertragCreated.send(topic, uuid, vertragCreated);
    }
}
