package de.szut.backend.controller;

import de.szut.backend.dto.ForgotDto;
import de.szut.backend.dto.LoginDto;
import de.szut.backend.dto.RegisterDto;
import de.szut.backend.dto.UpdateDto;
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
    UserMapper userMapper;

    public VerificationController (VerificationService _service) {
        this.service = _service;
    }

    @CrossOrigin
    @PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
    public ResponseEntity<User> Login(@RequestBody LoginDto dto) throws TypeNotPresentException {
        var user = service.login(dto);
        if (user == null) {
            return new ResponseEntity("User not found, bad password", HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(service.login(dto), HttpStatus.OK);
    }

    @PostMapping(path = "/forgotPassword", consumes = "application/json", produces = "application/json")
    public ResponseEntity<User> ForgotPassword(@RequestBody ForgotDto dto) throws TypeNotPresentException {
        return new ResponseEntity<>(service.forgotPassword(dto), HttpStatus.OK);
    }

    @PutMapping(path = "/updatePassword", consumes = "application/json")
    public ResponseEntity<User> UpdatePassword(@RequestBody UpdateDto dto) throws TypeNotPresentException {
        return new ResponseEntity<>(service.updatePassword(dto), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping(path = "/register", consumes = "application/json", produces = "application/json")
    public ResponseEntity<User> Register(@RequestBody RegisterDto dto) throws TypeNotPresentException {
        User result = service.register(dto);
        if (result.email == null) {
            return new ResponseEntity("Email already exists", HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity(result, HttpStatus.CREATED);
    }
}
