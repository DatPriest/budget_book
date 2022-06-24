package de.szut.backend.service;

import de.szut.backend.model.UserUpdatePasswordDto;
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
        this.userRepository = _userRepository;
    }

    public boolean updatePassword(UserUpdatePasswordDto dto) {
        User user = userRepository.findById(dto.userId);
        if (user != null) {
            if (user.hash == VerificationService.hashPassword(dto.oldHash + user.salt)) {
                user.salt = VerificationService.getSalt();
                user.hash = VerificationService.hashPassword(dto.newHash + user.salt);
                if (userRepository.save(user) != null) {
                    return true;
                }
            }
        }
        return false;
    }

    public List<User> GetAllUser() {

        // Default Values
        return userRepository.findAll();
    }

    public User getUserById(long id) {
        User user = userRepository.findById(id);
        if (user != null) {
            return user;
        } else {
            return null;
        }
    }

    public boolean deleteUser(long id) {
        try {
            this.userRepository.deleteById(id);
        } catch (Exception ex) {
            ex.printStackTrace();
            return false;
        }
        return true;

    }

    public long getUserByEmail(String email) {
        User tempUser = this.userRepository.findByEmail(email);
        if (tempUser != null) {
            long userId = tempUser.id;
            return userId;
        }
        return -1;
    }
}
