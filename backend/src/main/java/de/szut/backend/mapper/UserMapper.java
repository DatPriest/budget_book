package de.szut.backend.mapper;


import de.szut.backend.model.*;
import org.springframework.stereotype.Service;

import java.util.AbstractMap;
import java.util.Locale;

@Service
public class UserMapper {
    public User mapRegisterDtoToUser(RegisterDto dto) {
        User user = new User();
        user.email = dto.email;
        user.hash = dto.hash;
        user.question = dto.securityQuestion;
        user.answer = dto.securityAnswer.toLowerCase(Locale.ROOT);
        return user;
    }

    public User mapLoginDtoToUser(LoginDto dto) {
        User user = new User();
        user.email = dto.email;
        user.hash = dto.hash;
        return user;
    }
}
