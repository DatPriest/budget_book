package de.szut.backend.mapper;

import de.szut.backend.dto.GroupCreateDto;
import de.szut.backend.model.Group;
import org.springframework.stereotype.Service;

@Service
public class GroupMapper {
    public Group mapGroupCreateDtoToGroup(GroupCreateDto dto) {
        Group group = new Group();
        group.groupName = dto.getGroupName();

        return group;
    }
}
