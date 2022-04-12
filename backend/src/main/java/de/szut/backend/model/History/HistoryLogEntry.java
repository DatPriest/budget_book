package de.szut.backend.model.History;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name="HistoryLogEntries")
public class HistoryLogEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long actionId;
    private String additionalInformation;
    @CreationTimestamp
    private Date date_Created;
    @UpdateTimestamp
    private Date date_Changed;
}
