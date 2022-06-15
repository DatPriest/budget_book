package de.szut.backend.model;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="groupxuser")
public class GroupXUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long groupXUserId;

    public Long userId;
    public Long groupId;

    @CreationTimestamp
    public Date dateCreated;

}
