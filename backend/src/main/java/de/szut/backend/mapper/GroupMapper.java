package de.szut.backend.mapper;

import de.szut.backend.dto.*;
import de.szut.backend.exceptions.SecurityQuestionNotExists;
import de.szut.backend.model.Group;
import de.szut.backend.model.GroupXUser;
import de.szut.backend.model.Image;
import de.szut.backend.model.User;
import de.szut.backend.repository.SecurityQuestionRepository;
import de.szut.backend.service.ImageService;
import de.szut.backend.service.SecurityQuestionService;
import de.szut.backend.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class GroupMapper {
    private final UserService userService;
    private final ImageService imageService;
    private final SecurityQuestionRepository securityQuestionRepository;
    public GroupMapper(UserService _userService,
                       ImageService _imageService,
                       SecurityQuestionRepository _securityQuestionRepository) {
        this.userService = _userService;
        this.imageService = _imageService;
        this.securityQuestionRepository = _securityQuestionRepository;

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
        if (user == null) {
            return null;
        }
        dto.firstName = user.firstName;
        dto.lastName = user.lastName;
        dto.created = user.created;
        dto.lastUpdate = user.lastUpdate;
        dto.lastLogin = user.lastLogin;
        dto.email = user.email;

        dto.userId = user.id;
        dto.imageString = image != null ? image.imageString : "";
        try {
            dto.securityQuestionKey = securityQuestionRepository.findById(user.securityQuestionId).getKey();
        } catch (SecurityQuestionNotExists e) {
            e.printStackTrace();
            return null;
        }

        return dto;
    }
}
