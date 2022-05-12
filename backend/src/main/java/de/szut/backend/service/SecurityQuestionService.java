package de.szut.backend.service;

import de.szut.backend.dto.AddSecurityQuestionDto;
import de.szut.backend.dto.SecurityQuestionDto;
import de.szut.backend.mapper.SecurityQuestionMapper;
import de.szut.backend.model.SecurityQuestion;
import de.szut.backend.repository.SecurityQuestionRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SecurityQuestionService extends BaseService {
    private final SecurityQuestionRepository questionRepository;
    private final SecurityQuestionMapper mapper;
    public SecurityQuestionService(SecurityQuestionRepository _questionRepository,
                                   SecurityQuestionMapper _mapper) {
        this.questionRepository = _questionRepository;
        this.mapper = _mapper;
    }

    public List<SecurityQuestionDto> getSecurityQuestions() throws Exception {
        List<SecurityQuestionDto> dtoList = new ArrayList<>();
        var securityQuestions = questionRepository.findAll();
        if (securityQuestions.isEmpty()) {
            throw new Exception("SecurityQuestions Table is empty!");
        }
        for (SecurityQuestion question: securityQuestions) {
            dtoList.add(mapper.mapSecurityQuestionToSecurityQuestionDto(question));
        }
        return dtoList;
    }

    public SecurityQuestionDto addSecurityQuestion(AddSecurityQuestionDto dto) throws Exception {
        SecurityQuestion question = mapper.mapAddSecurityQuestionDtoToSecurityQuestion(dto);
        if (questionRepository.existsByKey(dto.key)) {
            throw new Exception("SecurityQuestionKey already exists!");
        }
        return mapper.mapSecurityQuestionToSecurityQuestionDto(questionRepository.save(question));
    }
}
