package de.szut.backend.dto;

import lombok.Data;

@Data
public class OutputFaqDto {
    public String question;
    public String answer;

    public OutputFaqDto(String _question, String _answer) {
        this.answer = _answer;
        this.question = _question;
    }
}