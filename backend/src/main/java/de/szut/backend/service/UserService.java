package de.szut.backend.service;

import org.apache.logging.log4j.LogManager;
import org.springframework.stereotype.Service;
import de.szut.backend.model.User;
import org.apache.logging.log4j.Logger;

@Service
public class UserService extends ParentService {

    public UserService() {

    }

    public User[] GetUser() {

        // Default Values
        User[] userList = {
                new User("Toastmann", "Simon", "Simon"),
                new User("Nochmann", "Simon", "Simon"),
                new User("Lukasmann", "Simon", "Simon"),
        };
        return userList;
    }
}
