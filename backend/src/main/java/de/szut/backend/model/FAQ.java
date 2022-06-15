package de.szut.backend.model;

import lombok.NonNull;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="faq")
public class FAQ {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long faqId;
    @Column(nullable = false)
    public long userID;
    @Column(nullable = false)
    public String question;
    public String answer;
    @CreationTimestamp
    public Date created;
    @UpdateTimestamp
    public Date lastUpdate;
}

