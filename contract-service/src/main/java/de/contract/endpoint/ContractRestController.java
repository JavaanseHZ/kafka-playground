package de.contract.endpoint;

import de.contract.messaging.producer.contract.ContractChangedProducer;
import de.contract.messaging.producer.contract.ContractCreatedProducer;
import de.contract.messaging.producer.contract.ContractDeletedProducer;
import de.contract.model.Contract;
import de.contract.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/contract")
public class ContractRestController {

    private final ContractRepository contractRepository;
    private final ContractCreatedProducer contractCreatedProducer;
    private final ContractChangedProducer contractChangedProducer;
    private final ContractDeletedProducer contractDeletedProducer;

    @Autowired
    ContractRestController(ContractRepository contractRepository,
                           ContractCreatedProducer contractCreatedProducer,
                           ContractChangedProducer contractChangedProducer,
                           ContractDeletedProducer contractDeletedProducer) {

        this.contractRepository = contractRepository;
        this.contractCreatedProducer = contractCreatedProducer;
        this.contractChangedProducer = contractChangedProducer;
        this.contractDeletedProducer = contractDeletedProducer;
    }

    @GetMapping
    @ResponseBody
    public List<Contract> getAll() {
        return contractRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Contract> getById(@PathVariable String id) {
        return contractRepository.findById(UUID.fromString(id))
            .map(contract ->
                new ResponseEntity<>(contract, HttpStatus.OK)
            )
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    @ResponseBody
    public ResponseEntity<Contract> create(@RequestBody Contract contract) {
        if(contract.getId() == null && contract.getClient().getId() != null) {
            contract.setId(UUID.randomUUID());
            contractRepository.save(contract);
            contractCreatedProducer.sendEvent(contract.getId().toString(), contract);
            return new ResponseEntity<>(contract, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity update(@PathVariable String id, @RequestBody Contract contract) {
        if(contract.getId() != null && contract.getClient().getId() != null) {
            contractRepository.findById(UUID.fromString(id))
                .map(foundContract -> {
                    foundContract.getClient().setLastname(contract.getClient().getLastname());
                    foundContract.getClient().setFirstname(contract.getClient().getFirstname());
                    foundContract.getClient().setId(contract.getClient().getId());
                    foundContract.setPremium(foundContract.getPremium());
                    foundContract.setType(foundContract.getType());
                    contractRepository.save(foundContract);
                    contractChangedProducer.sendEvent(id, foundContract);
                    return new ResponseEntity(HttpStatus.OK);
                });
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity delete(@PathVariable String id) {
        contractRepository.findById(UUID.fromString(id))
            .map(foundContract -> new ResponseEntity(HttpStatus.OK));
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}