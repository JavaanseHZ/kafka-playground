package de.vertrag.endpoint;

import de.vertrag.model.Vertrag;
import de.vertrag.repository.VertragRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/vertrag")
public class VertragRestController {

    private final VertragRepository vertragRepository;

    @Autowired
    VertragRestController(VertragRepository vertragRepository) {
        this.vertragRepository = vertragRepository;
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
            Vertrag savedVertrag = vertragRepository.save(vertrag);
            return new ResponseEntity<>(savedVertrag, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity update(@PathVariable String id, @RequestBody Vertrag vertrag) {
        if(vertrag.getId() != null && vertrag.getPartner().getId() != null) {
            return vertragRepository.findById(UUID.fromString(id))
                .map(savedVertrag -> {
                    savedVertrag.setPartner(vertrag.getPartner());
                    savedVertrag.setBeitrag(vertrag.getBeitrag());
                    savedVertrag.setSparte(vertrag.getSparte());
                    vertragRepository.save(savedVertrag);
                    return new ResponseEntity(HttpStatus.OK);
                })
                .orElse(new ResponseEntity(HttpStatus.BAD_REQUEST));
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}