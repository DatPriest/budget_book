package de.szut.backend.dto;

import de.szut.backend.model.Question;
import lombok.Data;

@Data
public class ForgotDto {
    public String email;
    public Question securityQuestion;
    public String securityAnswer;

}
