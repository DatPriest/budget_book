package de.szut.backend.service;

import de.szut.backend.dto.GroupCreateDto;
import de.szut.backend.mapper.GroupMapper;
import de.szut.backend.model.Group;
import de.szut.backend.repository.GroupRepository;
import org.springframework.stereotype.Service;

@Service
public class GroupService extends BaseService {
    private final GroupMapper mapper;
    private final GroupRepository repo;
    public GroupService(GroupMapper _mapper, GroupRepository _repo) {
        super();
        this.mapper = _mapper;
        this.repo = _repo;
    }

    public Group createGroup(GroupCreateDto dto) {
        var group = mapper.mapGroupCreateDtoToGroup(dto);
        return repo.save(group);
    }
}
