package de.szut.backend.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="groups")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;
    public String groupName;
    public long imageId;
    @CreationTimestamp
    public Date created;
    @UpdateTimestamp
    public Date lastUpdate;

}
