package de.vertragservice.messaging.producer;

import de.vertrag.kafkacommand.create.CreateVertrag;
import de.vertrag.kafkacommand.create.Partner;
import de.vertragservice.model.Vertrag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class CreateVertragProducer {

    @Value("${kafka.producer.topic.create.vertrag}")
    private String topic;

    @Autowired
    private KafkaTemplate<String, CreateVertrag> kafkaTemplateCreateVertrag;

    public void sendEvent(String uuid, Vertrag vertrag) {
        CreateVertrag createVertrag = new CreateVertrag();
        createVertrag.setId(vertrag.getId().toString());
        createVertrag.setBeitrag(vertrag.getBeitrag());
        createVertrag.setSparte(vertrag.getSparte());
        Partner partner = new Partner();
        partner.setId(vertrag.getPartner().getId().toString());
        partner.setFirstname(vertrag.getPartner().getVorname());
        partner.setLastname(vertrag.getPartner().getNachname());
        createVertrag.setPartner(partner);
        kafkaTemplateCreateVertrag.send(topic, uuid, createVertrag);
    }
}
