package de.vertragservice.messaging.producer.vertrag;

import de.vertrag.kafkaevent.changed.Partner;
import de.vertrag.kafkaevent.changed.VertragChanged;
import de.vertragservice.model.Vertrag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class VertragChangedProducer {

    @Value("${kafka.producer.topic.vertrag.changed}")
    private String topic;

    @Autowired
    private KafkaTemplate<String, VertragChanged> kafkaTemplateVertragChanged;

    public void sendEvent(String uuid, Vertrag vertrag) {
        VertragChanged vertragChanged = new VertragChanged();
        vertragChanged.setId(vertrag.getId().toString());
        vertragChanged.setBeitrag(vertrag.getBeitrag());
        vertragChanged.setSparte(vertrag.getSparte());
        Partner partner = new Partner();
        partner.setId(vertrag.getPartner().getId().toString());
        partner.setFirstname(vertrag.getPartner().getVorname());
        partner.setLastname(vertrag.getPartner().getNachname());
        vertragChanged.setPartner(partner);
        kafkaTemplateVertragChanged.send(topic, uuid, vertragChanged);
    }
}
