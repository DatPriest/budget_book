package de.szut.backend.mapper;


import de.szut.backend.dto.LoginDto;
import de.szut.backend.dto.RegisterDto;
import de.szut.backend.model.*;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Locale;

@Service
public class UserMapper {
    public User mapRegisterDtoToUser(RegisterDto dto) {
        User user = new User();
        user.email = dto.email;
        user.firstName = dto.firstName;
        user.lastName = dto.lastName;
        user.lastLogin = new Date();
        user.hash = dto.hash;
        user.question = dto.securityQuestion;
        user.answer = dto.securityAnswer.toLowerCase(Locale.ROOT);
        return user;
    }

    public User mapLoginDtoToUser(LoginDto dto) {
        User user = new User();
        user.email = dto.email;
        user.hash = dto.hash;
        user.lastLogin = new Date();
        return user;
    }
}
