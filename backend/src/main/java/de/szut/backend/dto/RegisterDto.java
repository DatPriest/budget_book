package de.szut.backend.dto;

import com.sun.istack.NotNull;
import de.szut.backend.model.Question;
import lombok.Data;

import java.util.AbstractMap;
import java.util.Locale;

@Data
public class RegisterDto {
    public String firstName;
    public String lastName;
    public String hash;
    public String email;
    @NotNull
    public Question securityQuestion;
    @NotNull
    public String securityAnswer;
}
