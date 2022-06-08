package de.szut.backend.dto;

import lombok.Data;

@Data
public class GroupDto {
    private long id;
    private String groupName;
    private String image;
    private String inviteCode;
}
