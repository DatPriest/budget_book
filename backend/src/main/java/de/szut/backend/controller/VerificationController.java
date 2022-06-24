package de.szut.backend.controller;

import de.szut.backend.dto.*;
import de.szut.backend.exceptions.SecurityQuestionNotExists;
import de.szut.backend.mapper.UserMapper;
import de.szut.backend.model.*;
import de.szut.backend.service.VerificationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/v1/verification")
public class VerificationController {
    VerificationService service;

    public VerificationController (VerificationService _service) {
        this.service = _service;
    }

    @CrossOrigin
    @PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
    public ResponseEntity<UserDto> login(@RequestBody LoginDto dto) {
        UserDto user = null;
        try {
            user = service.login(dto);
        } catch (SecurityQuestionNotExists e) {
            e.printStackTrace();
            return new ResponseEntity("SecurityQuestion does not exists by key", HttpStatus.NOT_FOUND);

        }
        if (user == null) {
            return new ResponseEntity("User not found, bad password", HttpStatus.UNAUTHORIZED);
        }
        try {
            return new ResponseEntity<>(service.login(dto), HttpStatus.OK);
        } catch (SecurityQuestionNotExists e) {
            e.printStackTrace();
            return new ResponseEntity("SecurityQuestion does not exists by key", HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @PostMapping(path = "/forgotPassword", consumes = "application/json", produces = "application/json")
    public ResponseEntity<ForgotBackDto> forgotPassword(@RequestBody ForgotDto dto) {
        ForgotBackDto result = null;
        try {
            result = service.forgotPassword(dto);
        } catch (SecurityQuestionNotExists e) {
            e.printStackTrace();
            return new ResponseEntity("SecurityQuestion does not exists by key", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if ( result != null ) {
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
        return new ResponseEntity("Securityanswer don't equals", HttpStatus.UNAUTHORIZED);

    }

    @CrossOrigin
    @PutMapping(path = "/updatePassword", consumes = "application/json")
    public ResponseEntity<User> updatePassword(@RequestBody UpdateDto dto) {
        return new ResponseEntity<>(service.updatePassword(dto), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping(path = "userByEmail/{email}")
    public ResponseEntity<Long> getUserIdByEmail(@PathVariable String email) {
        long userId = this.service.getUserIdByEmail(email);
        if (userId != -1) {
            return new ResponseEntity<>(userId, HttpStatus.OK);
        }
        return new ResponseEntity("User could not find by email.", HttpStatus.BAD_REQUEST);
    }

    @CrossOrigin
    @PostMapping(path = "/register", consumes = "application/json", produces = "application/json")
    public ResponseEntity<CreateUserDto> register(@RequestBody RegisterDto dto) {
        if (dto.hash.length() <= 7) {
            return new ResponseEntity("Password is empty or too short", HttpStatus.BAD_REQUEST);
        }
        CreateUserDto result = null;
        try {
            result = service.register(dto);
        } catch (SecurityQuestionNotExists e) {
            e.printStackTrace();
            return new ResponseEntity("SecurityQuestion does not exists by key", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (result.email == null) {
            return new ResponseEntity("Email already exists", HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity(result, HttpStatus.CREATED);
    }
}
