package de.szut.backend.model;

import javax.persistence.*;

@Entity
@Table(name="groupxuser")
public class GroupXUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public Long userId;
    public Long groupId;

}
