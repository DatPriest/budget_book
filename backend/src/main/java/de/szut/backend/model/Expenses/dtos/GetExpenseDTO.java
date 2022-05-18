package de.szut.backend.model.Expenses.dtos;

import lombok.Data;

import java.util.Date;

@Data
public class GetExpenseDTO {
    private long groupId;
    private long userId;
    private float amount;
    private long categoryId;
    private Date date_Created;
    private String description;
}
