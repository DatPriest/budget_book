package de.szut.backend.controller;

import de.szut.backend.mapper.UserMapper;
import de.szut.backend.model.LoginDto;
import de.szut.backend.model.RegisterDto;
import de.szut.backend.model.User;
import de.szut.backend.service.VerificationService;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/verification")
public class VerificationController {
    VerificationService service;
    UserMapper userMapper;

    public VerificationController (VerificationService _service) {
        this.service = _service;
    }

    @PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
    public ResponseEntity<User> Login(@RequestBody LoginDto dto) throws TypeNotPresentException{
        return new ResponseEntity<>(service.login(dto), HttpStatus.OK);
    }
    @PostMapping(path = "/register", consumes = "application/json", produces = "application/json")
    public ResponseEntity<User> Register(@RequestBody RegisterDto dto) throws TypeNotPresentException {
        User result = service.register(dto);
        if (result.email == null) {
            return new ResponseEntity("Email already exists", HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity(result, HttpStatus.CREATED);
    }
}
