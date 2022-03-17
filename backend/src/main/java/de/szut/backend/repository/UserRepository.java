package de.szut.backend.repository;

import de.szut.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByLastName(String lastName);
    User findByFirstName(String firstName);
    User findByEmail(String email);

}
