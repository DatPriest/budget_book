package de.szut.backend.dto;

import lombok.Data;

@Data
public class DeleteUserOutOfGroupDto {
    public Long userId;
    public Long groupId;
}
