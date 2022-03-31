package de.szut.backend.model;

import lombok.Data;

@Data
public class ForgotDto {
    public String email;
    public Question securityQuestion;
    public String securityAnswer;

}
