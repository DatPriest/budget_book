package de.szut.backend.dto;

import de.szut.backend.model.Question;
import lombok.Data;
import lombok.NonNull;

@Data
public class ForgotDto {
    @NonNull
    public String email;
    @NonNull
    public String hash;
    @NonNull
    public Question securityQuestion;
    @NonNull
    public String securityAnswer;

}
