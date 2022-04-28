package de.szut.backend.model.History;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="HistoryActions")
public class HistoryAction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long actionId;
    private String Action;
}
