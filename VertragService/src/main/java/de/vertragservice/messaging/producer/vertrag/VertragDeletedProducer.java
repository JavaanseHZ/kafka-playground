package de.vertragservice.messaging.producer.vertrag;

import de.vertrag.kafkaevent.deleted.VertragDeleted;
import de.vertragservice.model.Vertrag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class VertragDeletedProducer {

    @Value("${kafka.producer.topic.vertrag.deleted}")
    private String topic;

    @Autowired
    private KafkaTemplate<String, VertragDeleted> kafkaTemplateVertragDeleted;

    public void sendEvent(String uuid, Vertrag vertrag) {
        VertragDeleted vertragDeleted = new VertragDeleted();
        vertragDeleted.setId(vertrag.getId().toString());
        kafkaTemplateVertragDeleted.send(topic, uuid, vertragDeleted);
    }
}
