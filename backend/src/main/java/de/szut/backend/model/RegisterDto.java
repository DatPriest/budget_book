package de.szut.backend.model;

public class RegisterDto {
    public String hash;
    public String email;
    public RegisterDto(String _hash, String _email) {
        this.hash = _hash;
        this.email = _email;
    }
}
