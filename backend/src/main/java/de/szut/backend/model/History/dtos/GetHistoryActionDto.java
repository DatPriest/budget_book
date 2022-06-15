package de.szut.backend.model.History.dtos;

import lombok.Data;

import java.util.Date;

@Data
public class GetHistoryActionDto {
    private long historyActionId;
    private String actionName;
    private String additionalInformation;
    private Date date_Created;
    private Date date_Changed;
    private long groupId;
}
