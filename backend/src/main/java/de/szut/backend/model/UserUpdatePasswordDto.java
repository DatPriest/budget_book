package de.szut.backend.model;

import lombok.Data;

@Data
public class UserUpdatePasswordDto {
    public long userId;
    public String oldHash;
    public String newHash;
}
