package de.szut.backend.repository;


import de.szut.backend.model.History.HistoryLogEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoryLogRepository extends JpaRepository<HistoryLogEntry,Long> {
}
