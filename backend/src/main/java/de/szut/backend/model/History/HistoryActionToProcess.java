package de.szut.backend.model.History;

import lombok.Data;

@Data
public class HistoryActionToProcess {
    private String action;
    private String additionalInformation;
}
