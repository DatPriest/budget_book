package de.szut.backend.repository;

import de.szut.backend.model.SecurityQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SecurityQuestionRepository extends JpaRepository<SecurityQuestion, Long> {
    SecurityQuestion findByKey(String key);
    boolean existsByKey(String key);
}
