package de.szut.backend.mapper;


import de.szut.backend.dto.CreateUserDto;
import de.szut.backend.dto.ForgotBackDto;
import de.szut.backend.dto.LoginDto;
import de.szut.backend.dto.RegisterDto;
import de.szut.backend.model.*;
import de.szut.backend.repository.SecurityQuestionRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Locale;

@Service
public class UserMapper {
    final SecurityQuestionRepository securityQuestionRepository;
    public UserMapper(SecurityQuestionRepository _repo) {
        this.securityQuestionRepository = _repo;
    }
    public User mapRegisterDtoToUser(RegisterDto dto) {
        User user = new User();
        user.email = dto.email;
        user.firstName = dto.firstName;
        user.lastName = dto.lastName;
        user.lastLogin = new Date();
        user.hash = dto.hash;
        user.securityQuestionId = this.securityQuestionRepository.findByKey(dto.securityQuestionKey).getId();
        user.securityAnswer = dto.securityAnswer.toLowerCase(Locale.ROOT);
        user.imageId = 0;
        return user;
    }

    public User mapLoginDtoToUser(LoginDto dto) {
        User user = new User();
        user.email = dto.email;
        user.hash = dto.hash;
        user.lastLogin = new Date();
        return user;
    }

    public CreateUserDto mapUserToUserCreateDto(User user) {
        CreateUserDto dto = new CreateUserDto();
        dto.email = user.email;
        dto.id = user.id;
        dto.firstName = user.firstName;
        dto.lastName = user.lastName;
        return dto;
    }

    public ForgotBackDto mapUserToForgotBackDto(User user) {
        ForgotBackDto dto = new ForgotBackDto();
        dto.status = "Success";
        dto.id = user.id;
        return dto;
    }
}
