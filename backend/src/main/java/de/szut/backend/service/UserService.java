package de.szut.backend.service;

import de.szut.backend.controller.StatisticsController;
import de.szut.backend.model.UserUpdatePasswordDto;
import de.szut.backend.repository.UserRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.spi.LoggerRegistry;
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
    private static final Logger LOGGER = LogManager.getLogger(UserService.class, LogManager.getLogger().getMessageFactory());

    public boolean updatePassword(UserUpdatePasswordDto dto) {
        User user = userRepository.findById(dto.userId);
        LOGGER.info("User mit id {} wird bearbeitet",dto.userId);
        if (user != null) {
            LOGGER.info("User PasswortHash: {}, Eingegebenes altes PW {}", user.hash,VerificationService.hashPassword(dto.oldHash + user.salt));
            if (user.hash.equals(VerificationService.hashPassword(dto.oldHash + user.salt))) {
                LOGGER.info("User wird bearbeitet");
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
