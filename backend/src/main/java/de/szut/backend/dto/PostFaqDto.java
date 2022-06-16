package de.szut.backend.dto;

import lombok.Data;

@Data
public class PostFaqDto {
    private String question;
    private String answer;
    private long userId;

    public PostFaqDto(String _question, long _userId) {
        this.userId = _userId;
        this.question = _question;
    }
}
