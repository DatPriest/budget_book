package de.szut.backend.dto;

import lombok.Data;

@Data
public class UserUpdateDto {
    public long id;
    public String lastName;
    public String firstName;
    public String email;
    public String securityQuestionKey;
    public String securityAnswer;
    public String imageString;
}
