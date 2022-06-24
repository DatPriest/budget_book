package de.szut.backend.controller;

import de.szut.backend.dto.Statistics.GroupUserStatsDTO;
import de.szut.backend.dto.Statistics.StatisticsPerMonthDto;
import de.szut.backend.dto.Statistics.StatisticsPerYearDto;
import de.szut.backend.service.StatisticService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * Controller der API-Calls für die Statistiken
 */
@CrossOrigin
@RequestMapping(value = "/api/v1/statistics")
@RestController
public class StatisticsController {
    private static final Logger LOGGER = LogManager.getLogger(StatisticsController.class, LogManager.getLogger().getMessageFactory());

    private final StatisticService service;
    public StatisticsController(StatisticService _service) {
        this.service = _service;
    }

    //Alle Abfragen pro User
    /**
     * @see StatisticService#getAllExpensesSumFromUserPerMonth
     */
    @GetMapping(path = "/AllExpensesSumPerMonth/{userId}/{month}", produces = "application/json")
    public int AllExpensesSumPerMonth(@PathVariable long userId, @PathVariable int month) throws TypeNotPresentException {
        return this.service.getAllExpensesSumFromUserPerMonth(userId, month);
    }

    /**
     * @see StatisticService#getAllExpensesSumFromUserPerYear
     */
    @GetMapping(path = "/AllExpensesSumPerYear/{userId}/{year}", produces = "application/json")
    public int AllExpensesSumPerYear(@PathVariable long userId, @PathVariable int year) throws TypeNotPresentException {
        return this.service.getAllExpensesSumFromUserPerYear(userId, year);
    }

    /**
     * @see StatisticService#getAllExpensesFromUserPerMonth
     */
    @GetMapping(path = "/GetAllExpensesPerMonth/{userId}/{month}", produces = "application/json")
    public List<GroupUserStatsDTO> AllExpensesPerMonth(@PathVariable long userId, @PathVariable int month){
        return this.service.getAllExpensesFromUserPerMonth(userId, month);

    }

    /**
     * @see StatisticService#getAllExpensesFromUserPerYear
     */
    @GetMapping(path = "/GetAllExpensesPerYear/{userId}/{year}", produces = "application/json")
    public List<GroupUserStatsDTO> AllExpensesPerYear(@PathVariable long userId, @PathVariable int year){
        return this.service.getAllExpensesFromUserPerYear(userId, year);
    }

    //Alle Abfragen pro Gruppe

    /**
     * @see StatisticService#getAllExpensesFromGroupPerYear
     */
    @GetMapping(path = "/GetAllExpensesPerYearFromGroup/{groupId}", produces = "application/json")
    public ResponseEntity<List<GroupUserStatsDTO>> AllExpensesPerYearFromGroup(@PathVariable long groupId){
        return new ResponseEntity<>(this.service.getAllExpensesFromGroupPerYear(groupId) , HttpStatus.OK);
    }

    /**
     * @see StatisticService#getAllExpensesSumFromGroupPerYear
     */
    @GetMapping(path = "/GetAllExpensesSumPerYearFromGroup/{groupId}/{year}", produces = "application/json")
    public ResponseEntity<Integer> AllExpensesSumPerYearFromGroup(@PathVariable long groupId, @PathVariable int year){
        return new ResponseEntity<>( this.service.getAllExpensesSumFromGroupPerYear(groupId, year), HttpStatus.OK);
    }

    /**
     * @see StatisticService#getAllExpensesFromGroupPerMonth
     */
    @GetMapping(path = "/GetAllExpensesPerMonthFromGroup/{groupId}", produces = "application/json")
    public ResponseEntity<List<GroupUserStatsDTO>> AllExpensesPerMonthFromGroup(@PathVariable long groupId){
        return new ResponseEntity<>(this.service.getAllExpensesFromGroupPerMonth(groupId) , HttpStatus.OK);
    }

    /**
     * @see StatisticService#getAllExpensesSumFromGroupPerYear
     */
    @GetMapping(path = "/GetAllExpensesSumPerMonthFromGroup/{groupId}/{month}", produces = "application/json")
    public ResponseEntity<Integer> AllExpensesSumPerMonthFromGroup(@PathVariable long groupId, @PathVariable int month){
        return new ResponseEntity<>(this.service.getAllExpensesSumFromGroupPerYear(groupId, month), HttpStatus.OK);
    }

    @GetMapping(path = "/getAllExpensesFromGroupUser/{userId}/{groupId}", produces = "application/json")
    public ResponseEntity<List<GroupUserStatsDTO>> getAllExpensesFromGroupUser(@PathVariable long groupId, @PathVariable long userId){
        LOGGER.error("GruppenId: {}", groupId);
        return new ResponseEntity<>(this.service.getAllExpensesFromGroupUser(groupId, userId), HttpStatus.OK);
    }

    @GetMapping(path = "/getAllExpensesFromGroupUserFromThisMonth/{userId}/{groupId}", produces = "application/json")
    public ResponseEntity<List<GroupUserStatsDTO>> getAllExpensesFromGroupUserFromThisMonth(@PathVariable long groupId, @PathVariable long userId){
        LOGGER.error("GruppenId: {}", groupId);
        LOGGER.error("user ID: {}", userId);
        return new ResponseEntity<>(this.service.getAllExpensesFromGroupUserFromThisMonth(groupId, userId), HttpStatus.OK);
    }

    @GetMapping(path = "/getAllExpensesFromGroupUserFromThisYear/{userId}/{groupId}", produces = "application/json")
    public ResponseEntity<List<GroupUserStatsDTO>> getAllExpensesFromGroupUserFromThisYear(@PathVariable long groupId, @PathVariable long userId){
        LOGGER.error("GruppenId: {}", groupId);
        return new ResponseEntity<>(this.service.getAllExpensesFromGroupUserFromThisYear(groupId, userId), HttpStatus.OK);
    }

}
