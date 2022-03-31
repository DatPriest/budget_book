package de.szut.backend.repository;

import de.szut.backend.model.Question;
import de.szut.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByLastName(String lastName);
    User findByFirstName(String firstName);
    User findByEmail(String email);
    User findByEmailAndQuestionAndAnswer(String email, Question question, String answer);
    User findByEmailAndId(String email, long id);
    boolean existsByEmail(String email);

}
