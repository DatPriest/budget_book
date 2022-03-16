package de.szut.backend.service;

import de.szut.backend.model.RegisterDto;
import de.szut.backend.model.User;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;

@Service
public class DatabaseService extends BaseService {
    protected DatabaseService instance;
    public DatabaseService() {
        this.instance = this;
    }

    protected User saveUserToDatabase(RegisterDto dto) {
        dto.hash += this.getSalt();
        String hash256 = hashPassword(dto.hash);
        dto.hash = hash256;
        // Don't work actually, just returning a new User
        return new User(dto.email);
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
