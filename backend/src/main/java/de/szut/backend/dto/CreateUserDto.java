package de.szut.backend.dto;

import lombok.Data;

@Data
public class CreateUserDto {
    public long userId;
    public String firstName;
    public String lastName;
    public String email;
    public String imageString;

}
