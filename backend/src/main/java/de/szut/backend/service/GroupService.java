package de.szut.backend.service;

import de.szut.backend.dto.GroupCreateDto;
import de.szut.backend.dto.UserToGroupDto;
import de.szut.backend.mapper.GroupMapper;
import de.szut.backend.model.Group;
import de.szut.backend.model.GroupXUser;
import de.szut.backend.model.User;
import de.szut.backend.repository.GroupRepository;
import de.szut.backend.repository.GroupXUserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;

@Service
public class GroupService extends BaseService {
    private final GroupMapper mapper;
    private final GroupRepository repo;
    private final GroupXUserRepository groupXUserRepository;
    private final UserService userService;
    public GroupService(GroupMapper _mapper, GroupRepository _repo, GroupXUserRepository _groupXUserRepository, UserService _userService) {
        super();
        this.mapper = _mapper;
        this.repo = _repo;
        this.groupXUserRepository = _groupXUserRepository;
        this.userService = _userService;
    }

    public Group createGroup(GroupCreateDto dto) {
        var group = mapper.mapGroupCreateDtoToGroup(dto);
        if (group.groupName.equals("") || group.groupName.equals(null)) {
            return null;
        }
        return repo.save(group);
    }

    public GroupXUser addUserToGroup(UserToGroupDto dto) {
        var groupUser = mapper.mapUserToGroup(dto);
        if (!groupXUserRepository.existsGroupXUserByUserIdAndGroupId(groupUser.userId, groupUser.groupId)) {
            return groupXUserRepository.save(groupUser);
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
}
