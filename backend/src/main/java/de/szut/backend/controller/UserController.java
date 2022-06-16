package de.szut.backend.controller;

import de.szut.backend.dto.UserDto;
import de.szut.backend.dto.UserUpdateDto;
import de.szut.backend.dto.UserUpdatedDto;
import de.szut.backend.mapper.UserMapper;
import de.szut.backend.model.User;
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

    @GetMapping(path = "/id/{userId}", produces = "application/json")
    public ResponseEntity<UserDto> getUser(@PathVariable long userId) {
        User user = this.service.getUserById(userId);
        UserDto dto = this.userMapper.mapUserToUserDto(user);
        if (user != null) {
            return new ResponseEntity<>(dto, HttpStatus.OK);
        }
        return new ResponseEntity("User with id could not found", HttpStatus.BAD_REQUEST);
    }

    @PutMapping(path = "/update", produces = "application/json", consumes = "application/json")
    public ResponseEntity<UserUpdatedDto> updateUser(@RequestBody UserUpdateDto dto) {
        User user = this.userMapper.mapUserUpdateDtoToUser(dto);
        UserUpdatedDto updatedDto = this.userMapper.mapUserToUserUpdatedDto(user);
        return new ResponseEntity<>(updatedDto, HttpStatus.OK);
    }

    @DeleteMapping(path = "/delete/id/{userId}", produces = "application/json", consumes = "application/json")
    public ResponseEntity<Boolean> deleteUserById(@PathVariable long userId) {
        try {
            boolean deleted = this.service.deleteUser(userId);
            return new ResponseEntity(deleted, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity("User could not get deleted", HttpStatus.BAD_REQUEST);
        }
    }


}
