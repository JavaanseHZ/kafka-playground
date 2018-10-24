package de.vertragservice.endpoint;

import de.vertragservice.messaging.producer.ChangeVertragProducer;
import de.vertragservice.messaging.producer.CreateVertragProducer;
import de.vertragservice.model.Vertrag;
import de.vertragservice.repository.VertragRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/vertrag")
public class VertragRestController {

    private final VertragRepository vertragRepository;
    private final CreateVertragProducer createVertragProducer;
    private final ChangeVertragProducer changeVertragProducer;

    @Autowired
    VertragRestController(VertragRepository vertragRepository,
                          CreateVertragProducer createVertragProducer,
                          ChangeVertragProducer changeVertragProducer) {
        this.vertragRepository = vertragRepository;
        this.createVertragProducer = createVertragProducer;
        this.changeVertragProducer = changeVertragProducer;
    }

    @GetMapping
    @ResponseBody
    public List<Vertrag> getAll() {
        return vertragRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Vertrag> getById(@PathVariable String id) {
        return vertragRepository.findById(UUID.fromString(id))
            .map(vertrag ->
                new ResponseEntity<>(vertrag, HttpStatus.OK)
            )
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    @ResponseBody
    public ResponseEntity<Vertrag> create(@RequestBody Vertrag vertrag) {
        if(vertrag.getId() == null && vertrag.getPartner().getId() != null) {
            vertrag.setId(UUID.randomUUID());
            createVertragProducer.sendEvent(vertrag.getId().toString(), vertrag);
            return new ResponseEntity<>(vertrag, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity update(@PathVariable String id, @RequestBody Vertrag vertrag) {
        if(vertrag.getId() != null &&
           vertrag.getPartner().getId() != null &&
           vertragRepository.findById(UUID.fromString(id)).isPresent()) {
                createVertragProducer.sendEvent(id, vertrag);
                return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}