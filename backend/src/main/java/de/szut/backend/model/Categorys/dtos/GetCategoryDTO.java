package de.szut.backend.model.Categorys.dtos;

import lombok.Data;

import java.util.Date;

@Data
public class GetCategoryDTO {
    private String name;
    private Date date_Created;
}
