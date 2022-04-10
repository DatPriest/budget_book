package de.szut.backend.service;

import de.szut.backend.dto.GroupCreateDto;
import de.szut.backend.dto.UserToGroupDto;
import de.szut.backend.mapper.GroupMapper;
import de.szut.backend.model.Group;
import de.szut.backend.model.GroupXUser;
import de.szut.backend.repository.GroupRepository;
import de.szut.backend.repository.GroupXUserRepository;
import org.springframework.stereotype.Service;

@Service
public class GroupService extends BaseService {
    private final GroupMapper mapper;
    private final GroupRepository repo;
    private final GroupXUserRepository groupXUserRepository;
    public GroupService(GroupMapper _mapper, GroupRepository _repo, GroupXUserRepository _groupXUserRepository) {
        super();
        this.mapper = _mapper;
        this.repo = _repo;
        this.groupXUserRepository = _groupXUserRepository;
    }

    public Group createGroup(GroupCreateDto dto) {
        var group = mapper.mapGroupCreateDtoToGroup(dto);
        return repo.save(group);
    }

    public GroupXUser addUserToGroup(UserToGroupDto dto) {
        var groupUser = mapper.mapUserToGroup(dto);
        return groupXUserRepository.save(groupUser);

    }
}
