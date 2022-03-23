package de.szut.backend.mapper;


import de.szut.backend.model.LoginDto;
import de.szut.backend.model.RegisterDto;
import de.szut.backend.model.User;
import org.springframework.stereotype.Service;

import java.util.AbstractMap;

@Service
public class UserMapper {
    public User mapRegisterDtoToUser(RegisterDto dto) {
        User user = new User();
        user.email = dto.email;
        user.hash = dto.hash;
        user.salt = dto.salt;
        user.securityQuestion = new AbstractMap.SimpleEntry<>(dto.securityQuestion, dto.securityAnswer);
        return user;
    }

    public User mapLoginDtoToUser(LoginDto dto) {
        User user = new User();
        user.email = dto.email;
        user.hash = dto.hash;
        return user;
    }
}
