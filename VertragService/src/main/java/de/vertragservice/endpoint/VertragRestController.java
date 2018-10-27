package de.vertragservice.endpoint;

import de.vertragservice.messaging.producer.vertrag.VertragChangedProducer;
import de.vertragservice.messaging.producer.vertrag.VertragCreatedProducer;
import de.vertragservice.messaging.producer.vertrag.VertragDeletedProducer;
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
    private final VertragCreatedProducer vertragCreatedProducer;
    private final VertragChangedProducer vertragChangedProducer;
    private final VertragDeletedProducer vertragDeletedProducer;

    @Autowired
    VertragRestController(VertragRepository vertragRepository,
                          VertragCreatedProducer vertragCreatedProducer,
                          VertragChangedProducer vertragChangedProducer,
                          VertragDeletedProducer vertragDeletedProducer) {

        this.vertragRepository = vertragRepository;
        this.vertragCreatedProducer = vertragCreatedProducer;
        this.vertragChangedProducer = vertragChangedProducer;
        this.vertragDeletedProducer = vertragDeletedProducer;
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
            vertragRepository.save(vertrag);
            vertragCreatedProducer.sendEvent(vertrag.getId().toString(), vertrag);
            return new ResponseEntity<>(vertrag, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity update(@PathVariable String id, @RequestBody Vertrag vertrag) {
        if(vertrag.getId() != null && vertrag.getPartner().getId() != null) {
            vertragRepository.findById(UUID.fromString(id))
                .map(foundVertrag -> {
                    foundVertrag.getPartner().setNachname(vertrag.getPartner().getNachname());
                    foundVertrag.getPartner().setVorname(vertrag.getPartner().getVorname());
                    foundVertrag.getPartner().setId(vertrag.getPartner().getId());
                    foundVertrag.setBeitrag(foundVertrag.getBeitrag());
                    foundVertrag.setSparte(foundVertrag.getSparte());
                    vertragRepository.save(foundVertrag);
                    vertragChangedProducer.sendEvent(id, foundVertrag);
                    return new ResponseEntity(HttpStatus.OK);
                });
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity update(@PathVariable String id) {
        vertragRepository.findById(UUID.fromString(id))
            .map(foundVertrag -> {
                vertragRepository.delete(foundVertrag);
                vertragDeletedProducer.sendEvent(id, foundVertrag);
                return new ResponseEntity(HttpStatus.OK);
            });
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}