package de.szut.backend.model;

import lombok.Data;

import java.util.AbstractMap;

@Data
public class RegisterDto {
    public String firstName;
    public String lastName;
    public String hash;
    public String email;
    public String salt;
    public Question securityQuestion;
    public String securityAnswer;
    public RegisterDto(String _hash, String _email, Question _securityQuestion, String _securityAnswer) {
        this.hash = _hash;
        this.email = _email;
        securityQuestion = _securityQuestion;
        securityAnswer = _securityAnswer;
    }
}
