package de.szut.backend.service;

import de.szut.backend.model.History.HistoryAction;
import de.szut.backend.model.History.HistoryActionToProcess;
import de.szut.backend.model.History.HistoryLogEntry;
import de.szut.backend.repository.HistoryActionRepository;
import de.szut.backend.repository.HistoryLogRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoryLogService {
    private HistoryLogRepository historyLogRepository;
    private HistoryActionRepository historyActionRepository;
    public HistoryLogService(HistoryLogRepository historyLogRepository, HistoryActionRepository historyActionRepository){
        this.historyLogRepository = historyLogRepository;
        this.historyActionRepository = historyActionRepository;
    }

    //Erstellt einen neuen HistoryLogEntry
    /*public void createLogEntry(HistoryActionToProcess actionToProcess){
        long actionTypeId = -1L;
        //Wenn es die Action noch nicht gibt, fliegt eine Exception und sie wird erstellt.
        try{
            actionTypeId = getHistoryActionTypeId(actionToProcess);
        }catch(Exception e){
            HistoryAction newAction = new HistoryAction();
            //newAction.setAction(actionToProcess.getAction());
            createNewAction(newAction);
            actionTypeId = getHistoryActionTypeId(actionToProcess);
        }
        //Speichern eines HistoryLog-Eintrags.
        HistoryLogEntry entryToSave = new HistoryLogEntry();
        //entryToSave.setActionId(actionTypeId);
        //entryToSave.setAdditionalInformation(actionToProcess.getAdditionalInformation());

        historyLogRepository.save(entryToSave);
    }*/

    //Holt alle bisherigen Log-Einträge aus der Datenbank.
    public List<HistoryLogEntry> getAllLogEntries(){
        return this.historyLogRepository.findAll();
    }
    //Holt sich die ActionId anhand eines Action-Names.
    //Wenn noch nicht vorhanden, fliegt eine Exception.
    //private long getHistoryActionTypeId(HistoryActionToProcess action){
    //    return this.historyActionRepository.findHistoryActionByName(action.getAction());
    //}

    //Erstellt eine neue HistoryAction.
    private void createNewAction(HistoryAction action){
        this.historyActionRepository.save(action);
    }
}
