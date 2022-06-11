package de.szut.backend.mapper;

import de.szut.backend.model.History.HistoryLogEntry;
import de.szut.backend.model.History.dtos.GetHistoryActionDto;
import de.szut.backend.service.HistoryLogService;
import org.springframework.stereotype.Service;

@Service
public class HistoryLogMapper {
    private HistoryLogService h_Service;

    public HistoryLogMapper(HistoryLogService h_Service){
        this.h_Service = h_Service;
    }

    public GetHistoryActionDto mapHistoryLogEntryToGetHistoryActionDto(HistoryLogEntry logEntryToMap){
        GetHistoryActionDto dto = new GetHistoryActionDto();
        dto.setId(logEntryToMap.getId());
        dto.setActionName(h_Service.getHistoryActionName(logEntryToMap.getActionId()));
        dto.setAdditionalInformation(logEntryToMap.getAdditionalInformation());
        dto.setDate_Created(logEntryToMap.getDate_Created());
        dto.setDate_Changed(logEntryToMap.getDate_Changed());
        dto.setGroupId(logEntryToMap.getGroupId());
     return dto;
    }
}
