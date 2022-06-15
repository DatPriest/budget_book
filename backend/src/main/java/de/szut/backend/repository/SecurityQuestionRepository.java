package de.szut.backend.repository;

import de.szut.backend.exceptions.SecurityQuestionNotExists;
import de.szut.backend.model.SecurityQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SecurityQuestionRepository extends JpaRepository<SecurityQuestion, Long>  {
    SecurityQuestion findByKey(String key) throws SecurityQuestionNotExists;
    boolean existsByKey(String key);
}
