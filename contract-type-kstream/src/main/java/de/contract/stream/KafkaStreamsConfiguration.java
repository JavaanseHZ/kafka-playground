package de.contract.stream;

import de.contract.kafkaevent.created.ContractCreated;
import de.contract.life.kafkaevent.created.Client;
import de.contract.life.kafkaevent.created.LifeContractCreated;
import de.contract.other.kafkaevent.created.OtherContractCreated;
import io.confluent.kafka.serializers.AbstractKafkaAvroSerDeConfig;
import io.confluent.kafka.serializers.KafkaAvroDeserializerConfig;
import io.confluent.kafka.streams.serdes.avro.SpecificAvroSerde;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.requests.IsolationLevel;
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.StreamsConfig;
import org.apache.kafka.streams.kstream.KStream;
import org.apache.kafka.streams.processor.WallclockTimestampExtractor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.annotation.EnableKafkaStreams;
import org.springframework.kafka.annotation.KafkaStreamsDefaultConfiguration;

import java.util.Locale;
import java.util.Properties;

@Configuration
@EnableKafka
@EnableKafkaStreams
public class KafkaStreamsConfiguration {

    private static final String LIFE = "life" ;
    @Value(value = "${kafka.schemaregistry.address}")
    private String registryAddress;

    @Value(value = "${kafka.bootstrap.address}")
    private String bootstrapAddress;

    @Value("${kafka.consumer.topic.event.contract.created}")
    private String topicContractCreated;

    @Value("${kafka.producer.topic.event.contract.life.created}")
    private String topicLifeContractCreated;

    @Value("${kafka.producer.topic.event.contract.other.created}")
    private String topicOtherContractCreated;

    @Bean(name = KafkaStreamsDefaultConfiguration.DEFAULT_STREAMS_CONFIG_BEAN_NAME)
    public StreamsConfig kStreamsConfigs() {
        final Properties props = new Properties();
        props.put(StreamsConfig.APPLICATION_ID_CONFIG,
                "contract-type-stream-2");
        props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);
        props.put(AbstractKafkaAvroSerDeConfig.SCHEMA_REGISTRY_URL_CONFIG,
                registryAddress);
        props.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass().getName());
        props.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, SpecificAvroSerde.class);
        props.put(StreamsConfig.DEFAULT_TIMESTAMP_EXTRACTOR_CLASS_CONFIG, WallclockTimestampExtractor.class.getName());
        props.put(KafkaAvroDeserializerConfig.SPECIFIC_AVRO_READER_CONFIG, true);
        props.put(ConsumerConfig.ISOLATION_LEVEL_CONFIG, IsolationLevel.READ_COMMITTED.toString().toLowerCase(Locale.ROOT));
        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "latest");
        return new StreamsConfig(props);
    }

    @Bean
    public KStream<String, ContractCreated> kStream(StreamsBuilder kStreamBuilder) {
        KStream<String, ContractCreated> stream = kStreamBuilder.stream(topicContractCreated);

        KStream<String, ContractCreated>[] branches = stream.branch(
                (key, value) -> LIFE.equals(value.getType()),
                (key, value) -> !LIFE.equals(value.getType())
        );

        branches[0]
                .mapValues(contractCreated -> {
                    LifeContractCreated lifeContractCreated = new LifeContractCreated();
                    lifeContractCreated.setId(contractCreated.getId());
                    lifeContractCreated.setPremium(contractCreated.getPremium());
                    lifeContractCreated.setType(contractCreated.getType());
                    Client client = new Client();
                    client.setId(contractCreated.getClient().getId());
                    client.setFirstname(contractCreated.getClient().getFirstname());
                    client.setLastname(contractCreated.getClient().getLastname());
                    lifeContractCreated.setClient(client);
                    return lifeContractCreated;
                }).to(topicLifeContractCreated);

        branches[1]
                .mapValues(contractCreated -> {
                    OtherContractCreated otherContractCreated = new OtherContractCreated();
                    otherContractCreated.setId(contractCreated.getId());
                    otherContractCreated.setPremium(contractCreated.getPremium());
                    otherContractCreated.setType(contractCreated.getType());
                    de.contract.other.kafkaevent.created.Client client = new de.contract.other.kafkaevent.created.Client();
                    client.setId(contractCreated.getClient().getId());
                    client.setFirstname(contractCreated.getClient().getFirstname());
                    client.setLastname(contractCreated.getClient().getLastname());
                    otherContractCreated.setClient(client);
                    return otherContractCreated;
                }).to(topicOtherContractCreated);

        return stream;

    }

}