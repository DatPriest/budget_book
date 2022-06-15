package de.szut.backend.repository;

import de.szut.backend.model.History.HistoryAction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoryActionRepository extends JpaRepository<HistoryAction,Long> {
    @Query("SELECT ha.actionId FROM HistoryAction ha WHERE ha.Action = ?1")
    long findHistoryActionByName(String name);
}
