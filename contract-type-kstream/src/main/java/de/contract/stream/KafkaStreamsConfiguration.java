package de.contract.stream;

import de.contract.kafkaevent.created.ContractCreated;
import org.apache.kafka.common.utils.Bytes;
import io.confluent.kafka.serializers.AbstractKafkaAvroSerDeConfig;
import io.confluent.kafka.serializers.KafkaAvroDeserializerConfig;
import io.confluent.kafka.streams.serdes.avro.SpecificAvroSerde;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.requests.IsolationLevel;
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.KeyValue;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.StreamsConfig;
import org.apache.kafka.streams.kstream.*;
import org.apache.kafka.streams.processor.WallclockTimestampExtractor;
import org.apache.kafka.streams.state.WindowStore;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.annotation.EnableKafkaStreams;
import org.springframework.kafka.annotation.KafkaStreamsDefaultConfiguration;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

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
                "contract-type-stream");
        props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);
        props.put(AbstractKafkaAvroSerDeConfig.SCHEMA_REGISTRY_URL_CONFIG,
                registryAddress);
        props.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, SpecificAvroSerde.class);
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

        KStream<String, ContractCreated> filtered = stream.filter((key, value) -> LIFE.equals(value.getType()));

        filtered.to(topicLifeContractCreated);

        return filtered;

    }

}