package de.vertrag;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.EnableKafka;

@SpringBootApplication
@EnableKafka
public class VertragSpringApplication {

    public static void main(String[] args) {
        SpringApplication.run(VertragSpringApplication.class, args);
    }


}