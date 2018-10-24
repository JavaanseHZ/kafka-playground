package de.vertragservice.messaging.producer;

import de.vertrag.kafkacommand.change.ChangeVertrag;
import de.vertrag.kafkacommand.change.Partner;
import de.vertragservice.model.Vertrag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class ChangeVertragProducer {

    @Value("${kafka.producer.topic.vertrag.change}")
    private String topic;

    @Autowired
    private KafkaTemplate<String, ChangeVertrag> kafkaTemplateChangeVertrag;

    public void sendEvent(String uuid, Vertrag vertrag) {
        ChangeVertrag changeVertrag = new ChangeVertrag();
        changeVertrag.setId(vertrag.getId().toString());
        changeVertrag.setBeitrag(vertrag.getBeitrag());
        changeVertrag.setSparte(vertrag.getSparte());
        Partner partner = new Partner();
        partner.setId(vertrag.getPartner().getId().toString());
        partner.setFirstname(vertrag.getPartner().getVorname());
        partner.setLastname(vertrag.getPartner().getNachname());
        changeVertrag.setPartner(partner);
        kafkaTemplateChangeVertrag.send(topic, uuid, changeVertrag);
    }
}
