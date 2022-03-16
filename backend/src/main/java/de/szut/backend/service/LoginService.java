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
public class LoginService extends DatabaseService {
    public LoginService() {
        super();
    }

    public User login(LoginDto dto) {

        this.logger.info(dto);
        if (dto.password.contentEquals("test") && dto.userName.contentEquals("test"))
        {
            this.logger.info("YES");
            return new User("MusterJulian", "Lukas", "Lukas@Lukasmail.Julian.de");
        }
        return new User(null, null, null);
    }

    public User register(RegisterDto dto) {
        this.logger.info(dto.toString());


        // Save User to Database with salt

        return DatabaseService.getInstance().saveUserToDatabase(dto);
    }


}
