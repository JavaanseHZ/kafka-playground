package de.contract.stream;

import de.contract.insurance.kafkaevent.created.InsuranceContractCreated;
import de.contract.kafkaevent.id.Id;
import de.contract.realestate.kafkaevent.created.RealEstateContractCreated;
import io.confluent.kafka.serializers.AbstractKafkaAvroSerDeConfig;
import io.confluent.kafka.streams.serdes.avro.SpecificAvroSerde;
import org.apache.kafka.common.serialization.Serde;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import java.util.Collections;

@Configuration
public class SerdeConfiguration {

    @Value(value = "${kafka.schemaregistry.address}")
    private String registryAddress;

    @Bean
    @Scope("singleton")
    public Serde<InsuranceContractCreated> insuranceAvroSerde() {
        final Serde<InsuranceContractCreated> specificAvroSerde = new SpecificAvroSerde<>();
        final boolean isKeySerde = false;
        specificAvroSerde.configure(
                Collections.singletonMap(AbstractKafkaAvroSerDeConfig.SCHEMA_REGISTRY_URL_CONFIG, registryAddress),
                isKeySerde);
        return specificAvroSerde;
    }

    @Bean
    @Scope("singleton")
    public Serde<RealEstateContractCreated> realEstateAvroSerde() {
        final Serde<RealEstateContractCreated> specificAvroSerde = new SpecificAvroSerde<>();
        final boolean isKeySerde = false;
        specificAvroSerde.configure(
                Collections.singletonMap(AbstractKafkaAvroSerDeConfig.SCHEMA_REGISTRY_URL_CONFIG, registryAddress),
                isKeySerde);
        return specificAvroSerde;
    }

    @Bean
    @Scope("singleton")
    public Serde<Id> idAvroSerde() {
        final Serde<Id> specificAvroSerde = new SpecificAvroSerde<>();
        final boolean isKeySerde = true;
        specificAvroSerde.configure(
                Collections.singletonMap(AbstractKafkaAvroSerDeConfig.SCHEMA_REGISTRY_URL_CONFIG, registryAddress),
                isKeySerde);
        return specificAvroSerde;
    }
}
