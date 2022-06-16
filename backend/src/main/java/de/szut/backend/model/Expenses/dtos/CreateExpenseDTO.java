package de.szut.backend.model.Expenses.dtos;

import lombok.Data;

@Data
public class CreateExpenseDTO {
    private long groupId;
    private long userId;
    private float amount;
    private long categoryId;
    private String description;
}
