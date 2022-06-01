package de.szut.backend.dto;

import lombok.Data;

@Data
public class PostFaqDto {
    private String question;
    private String answer;
    private long userID;

    public PostFaqDto(String _question, long _userID) {
        this.userID = _userID;
        this.question = _question;
    }
}
