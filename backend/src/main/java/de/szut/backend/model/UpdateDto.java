package de.szut.backend.model;

import lombok.Data;

@Data
public class UpdateDto {
    public String hash;
    public long id;
    public String email;
}
