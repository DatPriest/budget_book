package de.szut.backend.dto;

import com.sun.istack.NotNull;
import de.szut.backend.model.SecurityQuestion;
import lombok.Data;

@Data
public class RegisterDto {
    @NotNull
    public String firstName;
    @NotNull
    public String lastName;
    @NotNull
    public String hash;
    @NotNull
    public String email;
    @NotNull
    public String securityQuestionKey;
    @NotNull
    public String securityAnswer;

    public String image;
}
