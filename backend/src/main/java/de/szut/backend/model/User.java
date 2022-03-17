package de.szut.backend.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;
    public String lastName;
    public String firstName;
    public String email;
    public String salt;
    public String hash;
    @CreationTimestamp
    public Date created;
    @UpdateTimestamp
    public Date lastUpdate;
    public Date lastLogin;


}
