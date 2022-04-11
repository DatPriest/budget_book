package de.szut.backend.repository;

import de.szut.backend.model.Group;
import de.szut.backend.model.GroupXUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupXUserRepository extends JpaRepository<GroupXUser, Long> {
}
