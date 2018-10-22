package de.vertrag.repository;

import de.vertrag.model.Vertrag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VertragRepository extends JpaRepository<Vertrag, UUID> {
}
