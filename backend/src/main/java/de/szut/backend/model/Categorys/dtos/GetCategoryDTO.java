package de.szut.backend.model.Categorys.dtos;

import lombok.Data;

import java.util.Date;

@Data
public class GetCategoryDTO {
    private long categoryId;
    private String name;
    private String iconName;
    private Date date_Created;
}
