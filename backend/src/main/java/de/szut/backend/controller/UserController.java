package de.szut.backend.controller;

import de.szut.backend.dto.UserDto;
import de.szut.backend.dto.UserUpdateDto;
import de.szut.backend.dto.UserUpdatedDto;
import de.szut.backend.exceptions.SecurityQuestionNotExists;
import de.szut.backend.mapper.UserMapper;
import de.szut.backend.model.User;
import de.szut.backend.model.UserUpdatePasswordDto;
import de.szut.backend.repository.UserRepository;
import de.szut.backend.service.UserService;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.google.gson.Gson;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/v1/user")
public class UserController {
    private final UserService service;
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private static final Logger LOGGER = LogManager.getLogger();

    public UserController(
            UserService _service,
            UserRepository _userRepository,
            UserMapper _userMapper) {
        this.service = _service;
        this.userRepository = _userRepository;
        this.userMapper = _userMapper;
    }

    @GetMapping(path = "/id/{id}", produces = "application/json")
    public ResponseEntity<UserDto> getUser(@PathVariable long id) {
        User user = this.service.getUserById(id);
        UserDto dto = null;
        try {
            dto = this.userMapper.mapUserToUserDto(user);
        } catch (SecurityQuestionNotExists e) {
            e.printStackTrace();
            return new ResponseEntity("SecurityQuestion does not exists by key", HttpStatus.NOT_FOUND);
        }
        if (user != null) {
            return new ResponseEntity<>(dto, HttpStatus.OK);
        }
        return new ResponseEntity("User with id could not found", HttpStatus.BAD_REQUEST);
    }

    @PutMapping(path = "/update", produces = "application/json", consumes = "application/json")
    public ResponseEntity<UserUpdatedDto> updateUser(@RequestBody UserUpdateDto dto) throws SecurityQuestionNotExists {
        User user = this.userMapper.mapUserUpdateDtoToUser(dto);
        if (user == null) {
            return new ResponseEntity("User could not get updated", HttpStatus.BAD_REQUEST);
        }
        UserUpdatedDto updatedDto = this.userMapper.mapUserToUserUpdatedDto(user);
        return new ResponseEntity<>(updatedDto, HttpStatus.OK);
    }

    @GetMapping(path = "/byEmail/{email}", produces = "application/json")
    public ResponseEntity<Long> getUserIdByEmail(@PathVariable String email) {
        long userId = this.service.getUserByEmail(email);
        if (userId != -1) {
            return new ResponseEntity<>(userId, HttpStatus.OK);
        }
        return new ResponseEntity("User email could not found in the database", HttpStatus.BAD_REQUEST);
    }

    @PutMapping(path = "/updatePassword", produces = "application/json")
    public ResponseEntity<String> updatePassword(@RequestBody UserUpdatePasswordDto dto) {
        if (service.updatePassword(dto)) {
            return new ResponseEntity<>("Successfully updated password!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Could not update password!", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(path = "/delete/id/{id}", produces = "application/json", consumes = "application/json")
    public ResponseEntity<Boolean> deleteUserById(@PathVariable long id) {
        try {
            boolean deleted = this.service.deleteUser(id);
            return new ResponseEntity(deleted, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity("User could not get deleted", HttpStatus.BAD_REQUEST);
        }
    }


}
