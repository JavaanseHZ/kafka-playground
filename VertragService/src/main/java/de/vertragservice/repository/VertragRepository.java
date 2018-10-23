package de.vertragservice.repository;

import de.vertragservice.model.Vertrag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VertragRepository extends JpaRepository<Vertrag, UUID> {
}
