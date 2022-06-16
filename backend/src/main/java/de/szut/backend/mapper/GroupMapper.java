package de.szut.backend.mapper;

import de.szut.backend.dto.GroupCreateDto;
import de.szut.backend.dto.GroupDto;
import de.szut.backend.dto.GroupUpdateDto;
import de.szut.backend.dto.UserToGroupDto;
import de.szut.backend.model.Group;
import de.szut.backend.model.GroupXUser;
import de.szut.backend.model.Image;
import org.springframework.stereotype.Service;

@Service
public class GroupMapper {
    public Group mapGroupCreateDtoToGroup(GroupCreateDto dto) {
        Group group = new Group();
        group.groupName = dto.groupName;
        return group;
    }

    public GroupXUser mapUserToGroup(UserToGroupDto dto) {
        GroupXUser groupX = new GroupXUser();
        groupX.groupId = dto.groupId;
        groupX.userId = dto.userId;
        return groupX;
    }

    public GroupDto mapGroupToGroupDto(Group group, String image) {
        GroupDto dto = new GroupDto();
        dto.setGroupName(group.groupName);
        dto.setGroupId(group.groupId);
        dto.setImageString(image);
        dto.setInviteCode(group.inviteCode);
        return dto;
    }

    public Group mapGroupUpdateDtoToGroup(GroupUpdateDto dto) {
        Group group = new Group();
        group.groupName = dto.groupName;
        group.groupId = dto.groupId;
        return group;
    }
}
