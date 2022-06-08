package de.szut.backend.repository;

import de.szut.backend.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Group, Long> {
    Group findGroupByInviteCode(String inviteCode);
}
