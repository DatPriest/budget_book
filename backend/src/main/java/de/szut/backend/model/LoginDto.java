package de.szut.backend.model;

import lombok.Data;

@Data
public class LoginDto {
    public String userName;
    public String password;

    public LoginDto(String _username, String _password) {
        this.userName = _username;
        this.password = _password;
    }
}
