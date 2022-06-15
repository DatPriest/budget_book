package de.szut.backend.dto;

import lombok.Data;

@Data
public class GroupCreateDto {
    public String groupName;
    public long groupId;
    public String image;
}
