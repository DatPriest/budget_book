package de.szut.backend.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.springframework.stereotype.Service;
import de.szut.backend.model.User;
import org.apache.logging.log4j.Logger;

@Service
public class UserService {
    private static final Logger LOGGER = LogManager.getLogger();

    public UserService() {

    }

    public User[] GetUser() {

        // Default Values
        User[] userList = {
                new User("Anton Toastmann", 18),
                new User("Anton Nochmann", 21),
                new User("Anton Lukasmann", 26),
        };
        return userList;
    }
}
