package de.szut.backend.mapper;

import de.szut.backend.dto.GroupCreateDto;
import de.szut.backend.dto.UserToGroupDto;
import de.szut.backend.model.Group;
import de.szut.backend.model.GroupXUser;
import org.springframework.stereotype.Service;

@Service
public class GroupMapper {
    public Group mapGroupCreateDtoToGroup(GroupCreateDto dto) {
        Group group = new Group();
        group.groupName = dto.getGroupName();

        return group;
    }

    public GroupXUser mapUserToGroup(UserToGroupDto dto) {
        GroupXUser groupX = new GroupXUser();
        groupX.groupId = dto.getGroupId();
        groupX.userId = dto.getUserId();
        return groupX;
    }
}
