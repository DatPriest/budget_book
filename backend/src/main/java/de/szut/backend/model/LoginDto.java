package de.szut.backend.model;

import lombok.Data;

@Data
public class LoginDto {
    public String email;
    public String hash;

    public LoginDto(String _email, String _hash) {
        this.email = _email;
        this.hash = _hash;
    }
}
