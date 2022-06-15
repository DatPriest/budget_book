package de.szut.backend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="security_questions")
public class SecurityQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long securityId;
    private String key;
}

