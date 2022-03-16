package de.szut.backend.controller;

import de.szut.backend.model.RegisterDto;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.szut.backend.model.LoginDto;
import de.szut.backend.model.User;
import de.szut.backend.service.LoginService;

@RestController
@RequestMapping(value = "/api/v1/")
public class LoginController {
    private final LoginService service;
    private static final Logger LOGGER = LogManager.getLogger();

    public LoginController(LoginService _service) {
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
