package de.szut.backend.controller;

import com.google.gson.Gson;
import de.szut.backend.dto.OutputFaqDto;
import de.szut.backend.dto.Statistics.StatisticsPerMonthDto;
import de.szut.backend.dto.Statistics.StatisticsPerYearDto;
import de.szut.backend.service.StatisticService;
import org.springframework.web.bind.annotation.*;

import java.time.Month;
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


    /**
     * Gibt die Summer aller Ausgaben pro User Zurück im Monat
     * @param userId
     * @return
     * @throws TypeNotPresentException
     */
    @GetMapping(path = "/AllExpensesSumPerMonth/{userId}/{month}", produces = "application/json")
    public int AllExpensesSumPerMonth(@PathVariable long userId, @PathVariable int month) throws TypeNotPresentException {
        return this.service.getAllExpensesSumFromUserPerMonth(userId, month);
    }

    /**
     * Gibt die Summer aller Ausgaben pro User Zurück im Jahr
     * @param userId
     * @return
     * @throws TypeNotPresentException
     */
    @GetMapping(path = "/AllExpensesSumPerYear/{userId}/{month}", produces = "application/json")
    public int AllExpensesSumPerYear(@PathVariable long userId, @PathVariable int year) throws TypeNotPresentException {
        return this.service.getAllExpensesSumFromUserPerYear(userId, year);
    }

    @GetMapping(path = "/GetAllExpensesPerMonth/{userId}/{month}", produces = "application/json")
    public List<StatisticsPerMonthDto> AllExpensesPerMonth(@PathVariable long userId, @PathVariable int month){
        return this.service.getAllExpensesFromUserPerMonth(userId, month);

    }

    @GetMapping(path = "/GetAllExpensesPerYear/{userId}/{year}", produces = "application/json")
    public List<StatisticsPerYearDto> AllExpensesPerYear(@PathVariable long userId, @PathVariable int year){
        return this.service.getAllExpensesFromUserPerYear(userId, year);
    }
}
