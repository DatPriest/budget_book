package de.szut.backend.dto;

import lombok.Data;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
public class GroupUpdateDto {
    public long groupId;
    public String groupName;
    public String image;
}
