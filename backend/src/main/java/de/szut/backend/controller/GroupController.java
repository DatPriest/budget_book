package de.szut.backend.controller;

import de.szut.backend.dto.GroupCreateDto;
import de.szut.backend.dto.LoginDto;
import de.szut.backend.dto.UserToGroupDto;
import de.szut.backend.model.Group;
import de.szut.backend.model.GroupXUser;
import de.szut.backend.model.User;
import de.szut.backend.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping(value = "/api/v1/groups")
@RestController
public class GroupController {
    private final GroupService service;
    public GroupController(GroupService _gs) {
        this.service = _gs;
    }

    @PostMapping(path = "/create", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Group> CreateGroup(@RequestBody GroupCreateDto dto) throws TypeNotPresentException {
        return new ResponseEntity<>(service.createGroup(dto), HttpStatus.OK);
    }

    @PostMapping(path = "/addUserToGroup", consumes = "application/json", produces = "application/json")
    public ResponseEntity<GroupXUser> CreateGroup(@RequestBody UserToGroupDto dto) throws TypeNotPresentException {
        return new ResponseEntity<>(service.addUserToGroup(dto), HttpStatus.OK);
    }
}
