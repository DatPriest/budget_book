package de.szut.backend.service;

import de.szut.backend.dto.*;
import de.szut.backend.exceptions.CreateGroupException;
import de.szut.backend.exceptions.GetGroupByIdException;
import de.szut.backend.mapper.GroupMapper;
import de.szut.backend.model.Group;
import de.szut.backend.model.GroupXUser;
import de.szut.backend.model.History.HistoryActionToProcess;
import de.szut.backend.model.Image;
import de.szut.backend.model.User;
import de.szut.backend.repository.GroupRepository;
import de.szut.backend.repository.GroupXUserRepository;
import de.szut.backend.repository.ImageRepository;
import net.bytebuddy.utility.RandomString;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class GroupService extends BaseService {
    private final GroupMapper mapper;
    private final GroupRepository repo;
    private final GroupXUserRepository groupXUserRepository;
    private final ImageRepository imageRepository;
    private final ImageService imageService;
    private final UserService userService;
    private final HistoryLogService logService;
    public GroupService(GroupMapper _mapper, GroupRepository _repo,
                        GroupXUserRepository _groupXUserRepository,
                        UserService _userService,
                        ImageRepository _imageRepository,
                        ImageService _imageService,
                        HistoryLogService logService) {
        this.mapper = _mapper;
        this.repo = _repo;
        this.groupXUserRepository = _groupXUserRepository;
        this.userService = _userService;
        this.imageRepository = _imageRepository;
        this.imageService = _imageService;
        this.logService = logService;
    }

    public Group createGroup(GroupCreateDto dto, long userId) throws Exception {
        var group = mapper.mapGroupCreateDtoToGroup(dto);
        var user = userService.getUserById(userId);
        if (user == null ) {
            return null;
        }
        if (group.groupName.equals("") || group.groupName.equals(null)) {
            return null;
        }
        Image image = new Image();
        image.imageString = dto.image;
        image = this.imageService.savePicture(image);
        group.imageId = image.id;
        group.inviteCode = generateInviteCode();

        group = repo.save(group);
        if (addUserToGroupByIds(group.id, user.id)) {
            return group;
        } else throw new CreateGroupException("Create Group User could not added to group");
    }

    public boolean addUserToGroupByIds(long groupId, long userId) throws Exception {
        var groupX = groupXUserRepository.findByGroupId(groupId);

        if (!groupXUserRepository.existsGroupXUserByUserIdAndGroupId(userId, groupId)) {
            if (repo.existsById(groupId)) {
                if (groupX == null) {
                    GroupXUser newGroup = new GroupXUser();
                    newGroup.groupId = groupId;
                    newGroup.userId = userId;
                    groupXUserRepository.save(newGroup);
                    return true;
                } else {
                    groupX.userId = userId;
                    log("User added to Group", "", groupId);
                    groupXUserRepository.save(groupX);
                    return true;
                }

            } else {
                throw new Exception("GroupId was not found");
            }
        }
        return false;
    }

    public GroupDto updateGroup(GroupUpdateDto dto) {
        log("Group Attribute Changed", "", dto.getGroupId());
        Group group = mapper.mapGroupUpdateDtoToGroup(dto);
        Group persistentGroup = repo.getById(dto.groupId);
        if (imageService.updatePicture(persistentGroup.imageId, dto.image)) {
            group.imageId = persistentGroup.imageId;
            return this.mapper.mapGroupToGroupDto(repo.save(group), dto.image);
        }
        return null;
    }

    public GroupDto getGroupById(long groupId) throws GetGroupByIdException {
        Group group = repo.findById(groupId);
        Image image = imageService.getPicture(group.imageId);
        if (group != null && image != null) {
            GroupDto dto = mapper.mapGroupToGroupDto(group, image.imageString);
            return dto;
        } else {
            throw new GetGroupByIdException("Group or image could not found");
        }
    }


    public Group getGroupById(long groupId, boolean _b) throws GetGroupByIdException {
        Group group = repo.findById(groupId);
        if (group != null) {
            return group;
        }
        return null;
    }
    public GroupXUser addUserToGroup(UserToGroupDto dto) throws Exception {
        var groupUser = mapper.mapUserToGroup(dto);
        if (!groupXUserRepository.existsGroupXUserByUserIdAndGroupId(groupUser.userId, groupUser.groupId)) {
            if (repo.existsById(dto.groupId)) {
                log("User added to Group", "", groupUser.groupId);
                return groupXUserRepository.save(groupUser);
            } else {
                throw new Exception("GroupId was not found");
            }
        }
        return null;
    }

    public ArrayList<UserDto> getUsersToGroup(Long groupId) {
        ArrayList<UserDto> users = new ArrayList<>();
        var userIds = groupXUserRepository.findAllByGroupId(groupId);
        for (GroupXUser groupXUser: userIds) {
            UserDto dto = mapper.mapGroupXUserToUserDto(groupXUser.userId);
            if (dto == null) {
                return null;
            }
            users.add(dto);
        }
        return users;
    }

    public GroupListDto getGroups(Long userId) {
        GroupListDto groups = new GroupListDto();
        groups.groups = new ArrayList<GroupDto>();
        for (var x :groupXUserRepository.findAllByUserId(userId)) {
            this.logger.info(x.groupId);
            var tempGroup = repo.findById(x.groupId);
            Group group = null;
            if ( tempGroup.isPresent()) {
                group = tempGroup.get();
                this.logger.info(group);
                String imageString = imageRepository.findById(group.imageId).imageString;
                GroupDto dto = mapper.mapGroupToGroupDto(group, imageString);
                groups.groups.add(dto);
            }

        }

        return groups;
    }

    public long getGroupIdForInviteCode(String inviteCode) throws NullPointerException{
        Group foundGroup;
        long groupId = -1;
        try{
            foundGroup = repo.findGroupByInviteCode(inviteCode);
            groupId = foundGroup.id;
        } catch (Exception e){
            throw new NullPointerException();
        }
        return groupId;
    }

    private String generateInviteCode(){
        return RandomString.make(8);
    }

    public DeleteUserOutOfGroupDto removeUserFromGroup(Long userId, Long groupId) {
        User user = userService.getUserById(userId);
        Group group = null;
        try {
            group = this.getGroupById(groupId, true);
        } catch (GetGroupByIdException e) {
            e.printStackTrace();
        }
        if (user != null && group != null) {
            GroupXUser temp = groupXUserRepository.findByGroupIdAndUserId(group.id, user.id);
            if (temp == null) {
                return null;
            }
            groupXUserRepository.delete(temp);
            DeleteUserOutOfGroupDto dto = new DeleteUserOutOfGroupDto();
            dto.userId = temp.userId;
            dto.groupId = temp.groupId;
            return dto;
        }
        return null;
    }

    private void log (String action, String addition, long groupId){
        HistoryActionToProcess actionToProcess = new HistoryActionToProcess();
        actionToProcess.setAction(action);
        actionToProcess.setAdditionalInformation(addition);
        actionToProcess.setGroupId(groupId);
        logService.createLogEntry(actionToProcess);
    }
}
