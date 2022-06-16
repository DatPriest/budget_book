package de.szut.backend.dto;

import lombok.Data;

@Data
public class GroupCreateDto {
    public String groupName;
    public long id;
    public String image;
}
