package de.szut.backend.dto;

import de.szut.backend.model.SecurityQuestion;
import lombok.Data;
import lombok.NonNull;

@Data
public class ForgotDto {
    @NonNull
    public Long userId;
    @NonNull
    public String hash;
    @NonNull
    public String securityQuestionKey;
    @NonNull
    public String securityAnswer;

}
