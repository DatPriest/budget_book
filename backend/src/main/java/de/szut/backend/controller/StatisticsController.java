package de.szut.backend.controller;

import de.szut.backend.dto.Statistics.StatisticsPerMonthDto;
import de.szut.backend.dto.Statistics.StatisticsPerYearDto;
import de.szut.backend.service.StatisticService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * Controller der API-Calls für die Statistiken
 */
@CrossOrigin
@RequestMapping(value = "/api/v1/statistics")
@RestController
public class StatisticsController {
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
    public List<StatisticsPerMonthDto> AllExpensesPerMonth(@PathVariable long userId, @PathVariable int month){
        return this.service.getAllExpensesFromUserPerMonth(userId, month);

    }

    /**
     * @see StatisticService#getAllExpensesFromUserPerYear
     */
    @GetMapping(path = "/GetAllExpensesPerYear/{userId}/{year}", produces = "application/json")
    public List<StatisticsPerYearDto> AllExpensesPerYear(@PathVariable long userId, @PathVariable int year){
        return this.service.getAllExpensesFromUserPerYear(userId, year);
    }

    //Alle Abfragen pro Gruppe

    /**
     * @see StatisticService#getAllExpensesFromGroupPerYear
     */
    @GetMapping(path = "/GetAllExpensesPerYearFromGroup/{groupId}/{year}", produces = "application/json")
    public List<StatisticsPerYearDto> AllExpensesPerYearFromGroup(@PathVariable long groupId, @PathVariable int year){
        return this.service.getAllExpensesFromGroupPerYear(groupId, year);
    }

    /**
     * @see StatisticService#getAllExpensesSumFromGroupPerYear
     */
    @GetMapping(path = "/GetAllExpensesSumPerYearFromGroup/{groupId}/{year}", produces = "application/json")
    public int AllExpensesSumPerYearFromGroup(@PathVariable long groupId, @PathVariable int year){
        return this.service.getAllExpensesSumFromGroupPerYear(groupId, year);
    }

    /**
     * @see StatisticService#getAllExpensesFromGroupPerMonth
     */
    @GetMapping(path = "/GetAllExpensesPerMonthFromGroup/{groupId}/{month}", produces = "application/json")
    public List<StatisticsPerMonthDto> AllExpensesPerMonthFromGroup(@PathVariable long groupId, @PathVariable int month){
        return this.service.getAllExpensesFromGroupPerMonth(groupId, month);
    }

    /**
     * @see StatisticService#getAllExpensesSumFromGroupPerYear
     */
    @GetMapping(path = "/GetAllExpensesSumPerMonthFromGroup/{groupId}/{month}", produces = "application/json")
    public int AllExpensesSumPerMonthFromGroup(@PathVariable long groupId, @PathVariable int month){
        return this.service.getAllExpensesSumFromGroupPerYear(groupId, month);
    }
}
