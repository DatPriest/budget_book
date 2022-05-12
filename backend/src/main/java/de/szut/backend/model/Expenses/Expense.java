package de.szut.backend.model.Expenses;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name="Expenses")
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long expensesId;
    private long groupId;
    private long userId;
    private float amount;
    private long categoryId;
    private String description;
    @CreationTimestamp
    private Date date_Created;
}
