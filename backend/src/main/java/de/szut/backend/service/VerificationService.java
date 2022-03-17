package de.szut.backend.service;

import de.szut.backend.mapper.UserMapper;
import de.szut.backend.model.LoginDto;
import de.szut.backend.model.RegisterDto;
import de.szut.backend.model.User;
import de.szut.backend.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

@Service
public class VerificationService extends BaseService {
    UserRepository userRepository;
    UserMapper userMapper;

    public VerificationService(UserRepository _userRepository, UserMapper _userMapper) {
        this.userRepository = _userRepository;
        this.userMapper = _userMapper;

    }

    public User login(LoginDto dto) {
        User user = this.userMapper.mapLoginDtoToUser(dto);
        User queryUser = userRepository.findByEmail(user.email);
        if (hashPassword(user.hash + queryUser.salt).equals(queryUser.hash)) {
            queryUser.lastLogin = new Date();
            userRepository.save(queryUser);
            return queryUser;
        } else {
            return null;
        }
    }

    public User register(RegisterDto dto) {
        this.logger.info(dto.toString());

        // Save User to Database with salt
        dto.salt = getSalt();
        dto.hash = hashPassword(dto.hash + dto.salt);

        //return this.userRepository.save(new User().hash);
        if (userRepository.existsByEmail(dto.email)) {
            return new User();
        }
        return this.userRepository.save(userMapper.mapRegisterDtoToUser(dto));
    }

    private String hashPassword(String hash) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] encodedHash = digest.digest(
                    hash.getBytes(StandardCharsets.UTF_16));
            return bytesToHex(encodedHash);
        }
        catch (NoSuchAlgorithmException e) {
            this.logger.error(e);
        }

        throw new RuntimeException("Hash couldn't generated!");
    }

    private String getSalt() {
        return UUID.randomUUID().toString();
    }

    private String bytesToHex(byte[] hash) {
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
}
