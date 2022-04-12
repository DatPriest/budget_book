package de.szut.backend.service;

import de.szut.backend.repository.UserRepository;
import org.apache.logging.log4j.LogManager;
import org.springframework.stereotype.Service;
import de.szut.backend.model.User;
import org.apache.logging.log4j.Logger;

import java.util.List;

@Service
public class UserService extends BaseService {
    private UserRepository userRepository;
    public UserService(UserRepository _userRepository) {
        super();
        this.userRepository = _userRepository;
    }

    public List<User> GetAllUser() {

        // Default Values
        return userRepository.findAll();
    }

    public User getUserById(long id) {
        return userRepository.findById(id).get();
    }
}
