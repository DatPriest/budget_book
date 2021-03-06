package de.szut.backend.dto;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

public class UserUpdatedDto {
    public long userId;
    public String lastName;
    public String firstName;
    public String email;
    public String securityQuestionKey;
    public String imageString;
    public Date created;
    public Date lastUpdate;
    public Date lastLogin;
}
