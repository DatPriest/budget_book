package de.szut.backend.dto;

import lombok.Data;

@Data
public class GroupDto {
    private long groupId;
    private String groupName;
    private String imageString;
    private String inviteCode;
}
