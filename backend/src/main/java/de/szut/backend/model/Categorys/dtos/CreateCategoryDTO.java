package de.szut.backend.model.Categorys.dtos;

import lombok.Data;

@Data
public class CreateCategoryDTO {
    private long groupId;
    private String name;
    private String iconName;
}
