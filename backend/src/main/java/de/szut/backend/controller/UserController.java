package de.szut.backend.controller;

import de.szut.backend.model.User;
import de.szut.backend.service.UserService;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/user")
public class UserController {
    private final UserService service;
    private static final Logger LOGGER = LogManager.getLogger();

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping(path = "/some", produces = "application/json")
    public String GetUser() {
        List<User> userList = this.service.GetAllUser();
        Gson gson = new Gson();
        this.LOGGER.info(userList.get(0));
        return gson.toJson(userList);
    }
}
