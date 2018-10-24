package de.vertragservice.messaging.producer;

import de.vertrag.kafkacommand.delete.DeleteVertrag;
import de.vertragservice.model.Vertrag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class DeleteVertragProducer {

    @Value("${kafka.producer.topic.delete.vertrag}")
    private String topic;

    @Autowired
    private KafkaTemplate<String, DeleteVertrag> kafkaTemplateDeleteVertrag;

    public void sendEvent(String uuid, Vertrag vertrag) {
        DeleteVertrag deleteVertrag = new DeleteVertrag();
        deleteVertrag.setId(vertrag.getId().toString());
        kafkaTemplateDeleteVertrag.send(topic, uuid, deleteVertrag);
    }
}
