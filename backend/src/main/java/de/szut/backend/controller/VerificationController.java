package de.szut.backend.controller;

import de.szut.backend.mapper.UserMapper;
import de.szut.backend.model.LoginDto;
import de.szut.backend.model.RegisterDto;
import de.szut.backend.model.User;
import de.szut.backend.service.VerificationService;
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
    public User Login(@RequestBody LoginDto dto) throws TypeNotPresentException{
        return service.login(dto);
    }
    @PostMapping(path = "/register", consumes = "application/json", produces = "application/json")
    public User Register(@RequestBody RegisterDto dto) throws TypeNotPresentException{
        return service.register(dto);
    }
}
