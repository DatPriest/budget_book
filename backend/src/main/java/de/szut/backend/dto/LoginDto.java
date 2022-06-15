package de.szut.backend.dto;

import lombok.Data;

@Data
public class LoginDto {
    public String email;
    public String hash;

}
