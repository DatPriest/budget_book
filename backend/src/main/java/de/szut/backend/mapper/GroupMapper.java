package de.szut.backend.mapper;

import de.szut.backend.dto.*;
import de.szut.backend.model.Group;
import de.szut.backend.model.GroupXUser;
import de.szut.backend.model.Image;
import de.szut.backend.model.User;
import de.szut.backend.service.ImageService;
import de.szut.backend.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class GroupMapper {
    private final UserService userService;
    private final ImageService imageService
    public GroupMapper(UserService _userService, ImageService _imageService) {
        this.userService = _userService;
        this.imageService = _imageService;

    }

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
        dto.setGroupId(group.id);
        dto.setImageString(image);
        dto.setInviteCode(group.inviteCode);
        return dto;
    }

    public Group mapGroupUpdateDtoToGroup(GroupUpdateDto dto) {
        Group group = new Group();
        group.groupName = dto.groupName;
        group.id = dto.groupId;
        return group;
    }

    public UserDto mapGroupXUserToUserDto(Long userId) {
        UserDto dto = new UserDto();
        User user = userService.getUserById(userId);
        Image image = imageService.getPicture(user.imageId);
        if (user != null) {
            return null;
        }
        dto.firstName = user.firstName;
        dto.userId = user.id;
        dto.imageString = image != null ? image.imageString : "";
        dto.securityQuestionKey = user.secu


    }
}
