package de.szut.backend.repository;

import de.szut.backend.model.Group;
import de.szut.backend.model.GroupXUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface GroupXUserRepository extends JpaRepository<GroupXUser, Long> {
    ArrayList<GroupXUser> findAllByGroupId(Long groupId);
    boolean existsGroupXUserByUserIdAndGroupId(long userId, long groupId);
    ArrayList<GroupXUser> findAllByUserId(Long userId);
    GroupXUser findByGroupIdAndUserId(Long groupId, Long userId);

    GroupXUser findByGroupId(long groupId);
}
