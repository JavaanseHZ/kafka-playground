package de.contract.stream;

import de.contract.insurance.kafkaevent.created.Client;
import de.contract.insurance.kafkaevent.created.InsuranceContractCreated;
import de.contract.kafkaevent.created.ContractCreated;
import de.contract.kafkaevent.id.Id;
import de.contract.realestate.kafkaevent.created.RealEstateContractCreated;
import io.confluent.kafka.serializers.AbstractKafkaAvroSerDeConfig;
import io.confluent.kafka.serializers.KafkaAvroDeserializerConfig;
import io.confluent.kafka.streams.serdes.avro.SpecificAvroSerde;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.requests.IsolationLevel;
import org.apache.kafka.common.serialization.Serde;
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.KeyValue;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.StreamsConfig;
import org.apache.kafka.streams.kstream.KStream;
import org.apache.kafka.streams.kstream.Produced;
import org.apache.kafka.streams.processor.WallclockTimestampExtractor;
import org.springframework.beans.factory.annotation.Autowired;
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

    private static final String INSURANCE = "insurance" ;
    private static final String REAL_ESTATE = "real estate" ;
    private static final double RISK_THRESHOLD = 10000d;
    private static final String HIGH_RISK = "high";
    private static final String LOW_RISK = "low";


    @Value(value = "${kafka.schemaregistry.address}")
    private String registryAddress;

    @Value(value = "${kafka.bootstrap.address}")
    private String bootstrapAddress;

    @Value("${kafka.consumer.topic.event.contract.created}")
    private String topicContractCreated;

    @Value("${kafka.producer.topic.event.contract.insurance.created}")
    private String topicInsuranceContractCreated;

    @Value("${kafka.producer.topic.event.contract.realestate.created}")
    private String topicRealEstateContractCreated;

    @Value("${kafka.consumer.offset}")
    private String consumerOffset;

    @Value("${kafka.stream.application.id}")
    private String applicationId;

    @Autowired
    Serde<InsuranceContractCreated> insuranceAvroSerde;

    @Autowired
    Serde<RealEstateContractCreated> realEstateAvroSerde;

    @Autowired
    Serde<Id> idAvroSerde;

    @Bean(name = KafkaStreamsDefaultConfiguration.DEFAULT_STREAMS_CONFIG_BEAN_NAME)
    public StreamsConfig kStreamsConfigs() {
        final Properties props = new Properties();
        props.put(StreamsConfig.APPLICATION_ID_CONFIG,
                applicationId);
        props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);
        props.put(AbstractKafkaAvroSerDeConfig.SCHEMA_REGISTRY_URL_CONFIG,
                registryAddress);
        props.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass().getName());
        props.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, SpecificAvroSerde.class);
        props.put(StreamsConfig.DEFAULT_TIMESTAMP_EXTRACTOR_CLASS_CONFIG, WallclockTimestampExtractor.class.getName());
        props.put(KafkaAvroDeserializerConfig.SPECIFIC_AVRO_READER_CONFIG, true);
        props.put(ConsumerConfig.ISOLATION_LEVEL_CONFIG, IsolationLevel.READ_COMMITTED.toString().toLowerCase(Locale.ROOT));
        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, consumerOffset);
        return new StreamsConfig(props);
    }

    @Bean
    public KStream<String, ContractCreated> kStream(StreamsBuilder kStreamBuilder) {
        KStream<String, ContractCreated> stream = kStreamBuilder.stream(topicContractCreated);

        KStream<String, ContractCreated>[] branches = stream.branch(
                (key, value) -> INSURANCE.equals(value.getType()),
                (key, value) -> REAL_ESTATE.equals(value.getType())
        );

        branches[0]
                .map((key,contractCreated) -> {
                    InsuranceContractCreated insuranceContractCreated = new InsuranceContractCreated();
                    insuranceContractCreated.setId(contractCreated.getId());
                    insuranceContractCreated.setPremium(contractCreated.getPremium());
                    if(Double.compare(contractCreated.getPremium(), RISK_THRESHOLD) > 0) {
                        insuranceContractCreated.setRisk(HIGH_RISK);
                    } else {
                        insuranceContractCreated.setRisk(LOW_RISK);
                    }
                    insuranceContractCreated.setType(contractCreated.getType());
                    Client client = new Client();
                    client.setId(contractCreated.getClient().getId());
                    client.setFirstname(contractCreated.getClient().getFirstname());
                    client.setLastname(contractCreated.getClient().getLastname());
                    insuranceContractCreated.setClient(client);
                    return new KeyValue<>(new Id(key), insuranceContractCreated);
                }).to(topicInsuranceContractCreated, Produced.with(idAvroSerde, insuranceAvroSerde));

        branches[1]
                .map((key,contractCreated) -> {
                    RealEstateContractCreated realEstateContractCreated = new RealEstateContractCreated();
                    realEstateContractCreated.setId(contractCreated.getId());
                    realEstateContractCreated.setPremium(contractCreated.getPremium());
                    realEstateContractCreated.setType(contractCreated.getType());
                    de.contract.realestate.kafkaevent.created.Client client = new de.contract.realestate.kafkaevent.created.Client();
                    client.setId(contractCreated.getClient().getId());
                    client.setFirstname(contractCreated.getClient().getFirstname());
                    client.setLastname(contractCreated.getClient().getLastname());
                    realEstateContractCreated.setClient(client);
                    return new KeyValue<>(new Id(key), realEstateContractCreated);
                }).to(topicRealEstateContractCreated, Produced.with(idAvroSerde, realEstateAvroSerde));

        return stream;

    }

}