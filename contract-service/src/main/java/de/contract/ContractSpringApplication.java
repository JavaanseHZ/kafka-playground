package de.contract;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.kafka.KafkaAutoConfiguration;
import org.springframework.kafka.annotation.EnableKafka;

@SpringBootApplication(exclude = KafkaAutoConfiguration.class)
@EnableKafka
public class ContractSpringApplication {

    public static void main(String[] args) {
        SpringApplication.run(ContractSpringApplication.class, args);
    }


}