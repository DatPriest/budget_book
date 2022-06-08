package de.szut.backend.service;

import de.szut.backend.dto.GroupCreateDto;
import de.szut.backend.dto.GroupDto;
import de.szut.backend.dto.GroupListDto;
import de.szut.backend.dto.UserToGroupDto;
import de.szut.backend.mapper.GroupMapper;
import de.szut.backend.model.Group;
import de.szut.backend.model.GroupXUser;
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
    private final UserService userService;
    public GroupService(GroupMapper _mapper, GroupRepository _repo,
                        GroupXUserRepository _groupXUserRepository,
                        UserService _userService,
                        ImageRepository _imageRepository) {
        this.mapper = _mapper;
        this.repo = _repo;
        this.groupXUserRepository = _groupXUserRepository;
        this.userService = _userService;
        this.imageRepository = _imageRepository;
    }

    public Group createGroup(GroupCreateDto dto) {
        var group = mapper.mapGroupCreateDtoToGroup(dto);
        Image image = new Image();
        image.imageString = dto.image;
        image = this.imageRepository.save(image);
        group.imageId = image.id;
        group.inviteCode = generateInviteCode();
        if (group.groupName.equals("") || group.groupName.equals(null)) {
            return null;
        }
        return repo.save(group);
    }

    public GroupXUser addUserToGroup(UserToGroupDto dto) throws Exception {
        var groupUser = mapper.mapUserToGroup(dto);
        if (!groupXUserRepository.existsGroupXUserByUserIdAndGroupId(groupUser.userId, groupUser.groupId)) {
            if (repo.existsById(dto.groupId)) {
                return groupXUserRepository.save(groupUser);
            } else {
                throw new Exception("GroupId was not found");
            }
        }
        return null;
    }

    public ArrayList<User> getUsersToGroup(Long id) {
        logger.info(id);
        ArrayList<User> users = new ArrayList<>();
        var userIds = groupXUserRepository.findAllByGroupId(id);
        for (var userId: userIds) {
            logger.info(userId);
            users.add(userService.getUserById(userId.userId));
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
                String imageString = imageRepository.findById(group.imageId).get().imageString;
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
}
