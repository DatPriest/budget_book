package de.szut.backend.service;

import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import de.szut.backend.model.LoginDto;
import de.szut.backend.model.RegisterDto;
import org.springframework.stereotype.Service;
import org.apache.logging.log4j.LogManager;
import org.springframework.stereotype.Service;
import de.szut.backend.model.User;
import org.apache.logging.log4j.Logger;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;

@Service
public class LoginService extends ParentService {

    public LoginService() {
        super();
    }

    public User login(LoginDto dto) {
        ParentService.LOGGER.info(dto);
        if (dto.password.contentEquals("test") && dto.userName.contentEquals("test"))
        {
            ParentService.LOGGER.info("YESSSS");
            return new User("MusterJulian", "Lukas", "Lukas@Lukasmail.Julian.de");
        }
        return new User(null, null, null);
    }

    public User register(RegisterDto dto) {
        ParentService.LOGGER.info(dto);
        dto.hash += this.getSalt();
        dto.hash = hashPassword(dto.hash);

        // Save User to Database with salt

        return saveUserToDatabase(dto);
    }

    private User saveUserToDatabase(RegisterDto dto) {
        // Dont works actually, just returning a new User
        return new User(dto.email);
    }

    private String hashPassword(String hash) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            return digest.digest(
                    hash.getBytes(StandardCharsets.UTF_8)).toString();
        }
        catch (NoSuchAlgorithmException e) {
            ParentService.LOGGER.error(e);
        }

        throw new RuntimeException("Hash couldn't generated!");
    }

    private String getSalt() {
       return UUID.randomUUID().toString();
    }
}
