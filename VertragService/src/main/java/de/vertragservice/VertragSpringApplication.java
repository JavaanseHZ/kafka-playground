package de.vertragservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.kafka.KafkaAutoConfiguration;
import org.springframework.kafka.annotation.EnableKafka;

@SpringBootApplication(exclude = KafkaAutoConfiguration.class)
@EnableKafka
public class VertragSpringApplication {

    public static void main(String[] args) {
        SpringApplication.run(VertragSpringApplication.class, args);
    }


}