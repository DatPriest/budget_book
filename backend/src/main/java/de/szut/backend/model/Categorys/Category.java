package de.szut.backend.model.Categorys;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name="Categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long categoryId;
    private String name;
    private long groupId;
    private String iconName;
    @CreationTimestamp
    private Date date_Created;
}
