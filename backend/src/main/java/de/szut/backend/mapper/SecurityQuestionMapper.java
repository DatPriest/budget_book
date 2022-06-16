package de.szut.backend.mapper;

import de.szut.backend.dto.AddSecurityQuestionDto;
import de.szut.backend.dto.SecurityQuestionDto;
import de.szut.backend.model.SecurityQuestion;
import org.springframework.stereotype.Service;

@Service
public class SecurityQuestionMapper {
    public SecurityQuestionDto mapSecurityQuestionToSecurityQuestionDto(SecurityQuestion securityQuestion) {
        SecurityQuestionDto dto = new SecurityQuestionDto();
        dto.setId(securityQuestion.getId());
        dto.setSecurityQuestionKey(securityQuestion.getKey());
        return dto;
    }

    public SecurityQuestion mapAddSecurityQuestionDtoToSecurityQuestion(AddSecurityQuestionDto dto) {
        SecurityQuestion question = new SecurityQuestion();
        question.setKey(dto.key);
        return question;
    }
}
