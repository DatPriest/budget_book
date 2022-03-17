package de.szut.backend.service;

import de.szut.backend.mapper.UserMapper;
import de.szut.backend.model.LoginDto;
import de.szut.backend.model.RegisterDto;
import de.szut.backend.model.User;
import de.szut.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
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

        this.logger.info(dto);
        if (dto.password.contentEquals("test") && dto.userName.contentEquals("test"))
        {
            this.logger.info("YES");
            return new User();
        }
        return new User();
    }

    public User register(RegisterDto dto) {
        this.logger.info(dto.toString());


        // Save User to Database with salt
        dto.hash = hashPassword(dto.hash);
        //return this.userRepository.save(new User().hash);

        return this.userRepository.save(userMapper.mapRegisterDtoToUser(dto));
    }

    private String hashPassword(String hash) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] encodedHash = digest.digest(
                    saltHash(hash).getBytes(StandardCharsets.UTF_16));
            return bytesToHex(encodedHash);
        }
        catch (NoSuchAlgorithmException e) {
            this.logger.error(e);
        }

        throw new RuntimeException("Hash couldn't generated!");
    }

    private String saltHash(String hash) {
        return (hash + UUID.randomUUID().toString());
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
