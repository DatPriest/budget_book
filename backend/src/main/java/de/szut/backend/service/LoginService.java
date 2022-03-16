package de.szut.backend.service;

import de.szut.backend.model.LoginDto;
import org.springframework.stereotype.Service;
import org.apache.logging.log4j.LogManager;
import org.springframework.stereotype.Service;
import de.szut.backend.model.User;
import org.apache.logging.log4j.Logger;

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
}
