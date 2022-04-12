package de.szut.backend.service;

import de.szut.backend.dto.ForgotDto;
import de.szut.backend.dto.LoginDto;
import de.szut.backend.dto.RegisterDto;
import de.szut.backend.dto.UpdateDto;
import de.szut.backend.mapper.UserMapper;
import de.szut.backend.model.*;
import de.szut.backend.model.History.HistoryActionToProcess;
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
    UserRepository userRepository;
    UserMapper userMapper;
    HistoryLogService logService;

    public VerificationService(UserRepository _userRepository, UserMapper _userMapper, HistoryLogService logService) {
        this.userRepository = _userRepository;
        this.userMapper = _userMapper;
        this.logService = logService;
    }

    public User login(LoginDto dto) {
        User user = this.userMapper.mapLoginDtoToUser(dto);
        User queryUser = userRepository.findByEmail(user.email);
        if (hashPassword(user.hash + queryUser.salt).equals(queryUser.hash)) {
            queryUser.lastLogin = new Date();
            userRepository.save(queryUser);
            //log("UserLoginSuccess",queryUser.lastLogin.toString());
            return queryUser;
        } else {
            return null;
        }
    }

    public User forgotPassword(ForgotDto dto) {
        return userRepository.findByEmailAndQuestionAndAnswer(
                dto.email,
                dto.securityQuestion,
                dto.securityAnswer.toLowerCase(Locale.ROOT));
    }

    public User register(RegisterDto dto) {
        if (userRepository.existsByEmail(dto.email)) {
            return new User();
        }
        this.logger.info(dto.toString());

        User user = userMapper.mapRegisterDtoToUser(dto);
        // Save User to Database with salt
        user.salt = getSalt();
        user.hash = hashPassword(user.hash + user.salt);


        return this.userRepository.save(user);
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

    public User updatePassword(UpdateDto dto) {
        var user = userRepository.findByEmailAndId(dto.email, dto.id);
        user.salt = getSalt();
        user.hash = hashPassword(dto.hash + user.salt);
        return userRepository.save(user);

    }
    //Beispiel Implementierung für die Erstellung eines Log-Eintrags
    private void log (String action, String addition){
        HistoryActionToProcess actionToProcess = new HistoryActionToProcess();
        actionToProcess.setAction(action);
        actionToProcess.setAdditionalInformation(addition);
        logService.createLogEntry(actionToProcess);
    }
}