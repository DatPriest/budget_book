package de.szut.backend.controller;

import de.szut.backend.dto.*;
import de.szut.backend.model.Group;
import de.szut.backend.model.GroupXUser;
import de.szut.backend.model.User;
import de.szut.backend.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.logging.Logger;

@CrossOrigin
@RequestMapping(value = "/api/v1/groups")
@RestController
public class GroupController {
    private final GroupService service;
    public GroupController(GroupService _gs) {
        this.service = _gs;
    }

    /**
     * @param dto
     * @return
     * @throws TypeNotPresentException
     */
    @PostMapping(path = "/create", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Group> CreateGroup(@RequestBody GroupCreateDto dto) throws TypeNotPresentException {
        return new ResponseEntity<>(service.createGroup(dto), HttpStatus.CREATED);
    }

    /**
     * @param dto
     * @return
     * @throws TypeNotPresentException
     */
    @PostMapping(path = "/addUserToGroup", consumes = "application/json", produces = "application/json")
    public ResponseEntity<GroupXUser> createGroup(@RequestBody UserToGroupDto dto) throws TypeNotPresentException {
        GroupXUser user = null;
        try {
            user = service.addUserToGroup(dto);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (user == null)
            return new ResponseEntity<>(null, HttpStatus.LOOP_DETECTED);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping(path = "/getUsers/{groupId}", produces = "application/json")
    public ResponseEntity<ArrayList<User>> getUsersToGroup(@PathVariable long groupId) throws TypeNotPresentException {
        return new ResponseEntity<>(service.getUsersToGroup(groupId), HttpStatus.OK);
    }

    @PutMapping(path = "/update", produces = "application/json")
    public ResponseEntity<GroupDto> updateGroup(@RequestBody GroupUpdateDto dto) throws TypeNotPresentException {
        return new ResponseEntity<>(service.updateGroup(dto), HttpStatus.OK);
    }

    @GetMapping(path = "/getGroups/{userId}", produces = "application/json")
    public ResponseEntity<GroupListDto> getGroups(@PathVariable long userId) throws TypeNotPresentException {
        GroupListDto groups = this.service.getGroups(userId);
        if (groups != null && !groups.groups.isEmpty()) {
            return new ResponseEntity<>(groups, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping(path = "/getGroupIdForInviteCode/{inviteCode}", produces = "application/json")
    public ResponseEntity<Long> getGroupIdForInviteCode(@PathVariable String inviteCode){
        long response;
        try{
            response = service.getGroupIdForInviteCode(inviteCode);
        } catch(NullPointerException e){
            response  = -1;
            return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
