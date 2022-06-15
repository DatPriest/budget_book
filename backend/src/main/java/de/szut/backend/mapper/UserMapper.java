package de.szut.backend.mapper;


import de.szut.backend.dto.*;
import de.szut.backend.exceptions.SecurityQuestionNotExists;
import de.szut.backend.model.*;
import de.szut.backend.repository.SecurityQuestionRepository;
import de.szut.backend.repository.UserRepository;
import de.szut.backend.service.ImageService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Locale;

@Service
public class UserMapper {
    private final SecurityQuestionRepository securityQuestionRepository;
    private final UserRepository userRepository;
    private final ImageService imageService;
    public UserMapper(SecurityQuestionRepository _repo, ImageService _imageService, UserRepository _userRepository) {
        this.securityQuestionRepository = _repo;
        this.imageService = _imageService;
        this.userRepository = _userRepository;
    }
    public User mapRegisterDtoToUser(RegisterDto dto) throws SecurityQuestionNotExists {
        User user = new User();
        user.email = dto.email;
        user.firstName = dto.firstName;
        user.lastName = dto.lastName;
        user.lastLogin = new Date();
        user.hash = dto.hash;
        user.securityQuestionId = this.securityQuestionRepository.findByKey(dto.securityQuestionKey).getId();
        user.securityAnswer = dto.securityAnswer.toLowerCase(Locale.ROOT);
        Image image = new Image();
        image.imageString = dto.imageString;
        image = imageService.savePicture(image);
        user.imageId = image.id;
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
        dto.imageString = imageService.getPicture(user.imageId).imageString;
        return dto;
    }

    public ForgotBackDto mapUserToForgotBackDto(User user) {
        ForgotBackDto dto = new ForgotBackDto();
        dto.status = "Success";
        dto.id = user.id;
        return dto;
    }

    public User mapUserUpdateDtoToUser(UserUpdateDto dto) throws SecurityQuestionNotExists {
        User user = new User();
        User dbUser = this.userRepository.findById(dto.id).get();
        user.id = dto.id;
        user.salt = dbUser.salt;
        user.hash = dbUser.hash;
        user.email = dto.email;
        user.firstName = dto.firstName;
        user.lastName = dto.lastName;
        user.securityQuestionId = securityQuestionRepository.findByKey(dto.securityQuestionKey).getId();
        user.securityAnswer = dto.securityAnswer;
        user.lastLogin = dbUser.lastLogin;
        user.imageId = dbUser.imageId;
        imageService.updatePicture(user.imageId, dto.imageString);
        user.created = dbUser.created;
        return userRepository.save(user);
    }

    public UserUpdatedDto mapUserToUserUpdatedDto(User user) throws SecurityQuestionNotExists {
        UserUpdatedDto dto = new UserUpdatedDto();
        dto.email = user.email;
        dto.id = user.id;
        dto.firstName = user.firstName;
        dto.lastName = user.lastName;
        dto.lastUpdate = user.lastUpdate;
        dto.lastLogin = user.lastLogin;
        dto.imageString = imageService.getPicture(user.imageId).imageString;
        dto.created = user.created;
        dto.securityQuestionKey = securityQuestionRepository.findById(user.securityQuestionId).getKey();

        return dto;
    }

    public UserDto mapUserToUserDto(User user) throws SecurityQuestionNotExists {
        UserDto dto = new UserDto();
        dto.created = user.created;
        dto.email = user.email;
        dto.firstName = user.firstName;
        dto.lastName = user.lastName;
        dto.lastLogin = user.lastLogin;
        dto.lastUpdate = user.lastUpdate;
        dto.imageString = imageService.getPicture(user.imageId).imageString;
        dto.securityQuestionKey = securityQuestionRepository.findById(user.securityQuestionId).getKey();
        dto.id = user.id;
        return dto;
    }
}
