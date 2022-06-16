package de.szut.backend.repository;


import de.szut.backend.model.History.HistoryLogEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface HistoryLogRepository extends JpaRepository<HistoryLogEntry,Long> {
    List<HistoryLogEntry> findAllByGroupId(long groupId);
}
