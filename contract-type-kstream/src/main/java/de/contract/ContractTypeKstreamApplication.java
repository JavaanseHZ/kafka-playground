package de.contract;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.EnableKafka;

@SpringBootApplication
public class ContractTypeKstreamApplication {

    public static void main(String[] args) {
        SpringApplication.run(ContractTypeKstreamApplication.class, args);
    }


}