package de.szut.backend.controller;

import com.google.gson.Gson;
import de.szut.backend.mapper.HistoryLogMapper;
import de.szut.backend.model.History.HistoryLogEntry;
import de.szut.backend.model.History.dtos.GetHistoryActionDto;
import de.szut.backend.service.HistoryLogService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/v1/history")
public class HistoryLogController {
    private HistoryLogService historyLogService;
    private HistoryLogMapper historyLogMapper;

    public HistoryLogController(HistoryLogService historyLogService, HistoryLogMapper historyLogMapper) {
        this.historyLogService = historyLogService;
        this.historyLogMapper = historyLogMapper;
    }

    @CrossOrigin
    @GetMapping(path = "/entries/{groupId}", produces = "application/json")
    public String GetUser(@PathVariable long groupId) {
        List<HistoryLogEntry> historyLog = this.historyLogService.getAllLogEntriesForGroup(groupId);
        List<GetHistoryActionDto> historyLogDto = new ArrayList<>();
        for(HistoryLogEntry e : historyLog){
            historyLogDto.add(historyLogMapper.mapHistoryLogEntryToGetHistoryActionDto(e));
        }
        Gson gson = new Gson();
        return gson.toJson(historyLogDto);
    }
}
