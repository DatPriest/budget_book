package de.szut.backend.service;

import de.szut.backend.dto.*;
import de.szut.backend.exceptions.SecurityQuestionNotExists;
import de.szut.backend.mapper.UserMapper;
import de.szut.backend.model.*;
import de.szut.backend.model.History.HistoryActionToProcess;
import de.szut.backend.repository.ImageRepository;
import de.szut.backend.repository.SecurityQuestionRepository;
import de.szut.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Date;
import java.util.Locale;
import java.util.UUID;

@Service
public class VerificationService extends BaseService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final HistoryLogService logService;
    private final ImageService imageService;
    private final ImageRepository imageRepository;
    private final SecurityQuestionRepository securityQuestionRepository;


    public VerificationService(UserRepository _userRepository,
                               UserMapper _userMapper,
                               HistoryLogService logService,
                               ImageRepository _imageRepository,
                               SecurityQuestionRepository _securityQuestionRepository,
                               ImageService _imageService) {
        this.userRepository = _userRepository;
        this.userMapper = _userMapper;
        this.logService = logService;
        this.imageRepository = _imageRepository;
        this.securityQuestionRepository = _securityQuestionRepository;
        this.imageService = _imageService;
    }

    public UserDto login(LoginDto dto) throws SecurityQuestionNotExists {
        User user = this.userMapper.mapLoginDtoToUser(dto);
        User queryUser = userRepository.findByEmail(user.email);
        if (queryUser != null && hashPassword(user.hash + queryUser.salt).equals(queryUser.hash)) {
            queryUser.lastLogin = new Date();
            user = userRepository.save(queryUser);
            return this.userMapper.mapUserToUserDto(user);
        } else {
            return null;
        }
    }

    public ForgotBackDto forgotPassword(ForgotDto dto) throws SecurityQuestionNotExists {
        User user = userRepository.findByIdAndSecurityQuestionIdAndSecurityAnswer(
                dto.userId,
                securityQuestionRepository.findByKey(dto.securityQuestionKey).getId(),
                dto.securityAnswer.toLowerCase(Locale.ROOT));
        if (user != null) {
            user.salt = getSalt();
            user.hash = hashPassword(dto.hash + user.salt);
            var newUser = userRepository.save(user);
            return userMapper.mapUserToForgotBackDto(newUser);
        } else {
            return null;
        }
    }

    public CreateUserDto register(RegisterDto dto) throws SecurityQuestionNotExists {
        if (userRepository.existsByEmail(dto.email)) {
            return new CreateUserDto();
        }
        this.logger.info(dto.toString());

        User user = userMapper.mapRegisterDtoToUser(dto);
        // Save User to Database with salt
        user.salt = getSalt();
        user.hash = hashPassword(user.hash + user.salt);
        return userMapper.mapUserToUserCreateDto(this.userRepository.save(user));
    }

    public static String hashPassword(String hash) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] encodedHash = digest.digest(
                    hash.getBytes(StandardCharsets.UTF_16));
            return bytesToHex(encodedHash);
        }
        catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        throw new RuntimeException("Hash couldn't generated!");
    }

    public static String getSalt() {
        return UUID.randomUUID().toString();
    }

    public static String bytesToHex(byte[] hash) {
        StringBuilder hexString = new StringBuilder(2 * hash.length);
        for (int i = 0; i < hash.length; i++) {
            String hex = Integer.toHexString(0xff & hash[i]);
            if(hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }
        return hexString.toString();
    }

    public UserDto updatePassword(UpdateDto dto) throws SecurityQuestionNotExists {
        var user = userRepository.findById(dto.userId);
        if (user == null) {
            return null;
        }
        user.salt = getSalt();
        user.hash = hashPassword(dto.hash + user.salt);
        return userMapper.mapUserToUserDto(userRepository.save(user));

    }

    public long getUserIdByEmail(String email) {
        User user = this.userRepository.findByEmail(email);
        if (user != null) {
            return user.id;
        }
        return -1;
    }
}
