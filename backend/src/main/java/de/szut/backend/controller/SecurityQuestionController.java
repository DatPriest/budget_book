package de.szut.backend.controller;

import de.szut.backend.dto.AddSecurityQuestionDto;
import de.szut.backend.dto.SecurityQuestionDto;
import de.szut.backend.service.SecurityQuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin
@RequestMapping(value = "/api/v1/securityQuestions")
public class SecurityQuestionController {
    private SecurityQuestionService securityQuestionService;
    public SecurityQuestionController(SecurityQuestionService _securityQuestionService) {
        this.securityQuestionService = _securityQuestionService;
    }

    @GetMapping(produces = "application/json")
    public ResponseEntity<List<SecurityQuestionDto>> getSecurityQuestions() {
        try {
            return new ResponseEntity<>(securityQuestionService.getSecurityQuestions(), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(path = "/{userId}",produces = "application/json")
    public ResponseEntity<SecurityQuestionDto> getSecurityUserQuestion(@PathVariable long userId) {
        try {
            var dto = securityQuestionService.getSecurityQuestion(userId);
            if (dto != null) {
                return new ResponseEntity<>(dto, HttpStatus.OK);
            }
            return new ResponseEntity("Something bad happened", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(produces = "application/json", consumes = "application/json")
    public ResponseEntity<SecurityQuestionDto> postSecurityQuestion(@RequestBody AddSecurityQuestionDto dto) {
        try {
            return new ResponseEntity<>(securityQuestionService.addSecurityQuestion(dto), HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
