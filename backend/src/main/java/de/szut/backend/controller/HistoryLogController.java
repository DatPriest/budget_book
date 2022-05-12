package de.szut.backend.controller;

import com.google.gson.Gson;
import de.szut.backend.model.History.HistoryLogEntry;
import de.szut.backend.service.HistoryLogService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/v1/history")
public class HistoryLogController {
    private HistoryLogService historyLogService;

    public HistoryLogController(HistoryLogService historyLogService) {
        this.historyLogService = historyLogService;
    }

    @GetMapping(path = "/entries/{groupId}", produces = "application/json")
    public String GetUser(@PathVariable long groupId) {
        List<HistoryLogEntry> historyLog = this.historyLogService.getAllLogEntriesForGroup(groupId);
        Gson gson = new Gson();
        return gson.toJson(historyLog);
    }
}
