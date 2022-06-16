package de.szut.backend.service;

import de.szut.backend.dto.Statistics.StatisticsPerMonthDto;
import de.szut.backend.dto.Statistics.StatisticsPerYearDto;
import de.szut.backend.mapper.ExpensesMapper;
import de.szut.backend.mapper.FaqMapper;
import de.szut.backend.model.Expenses.Expense;
import de.szut.backend.repository.ExpensesRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

@Service
public class StatisticService {
    ExpensesRepository repo;
    ExpensesMapper mapper;
    GregorianCalendar calendar;
    private static final Logger LOGGER = LogManager.getLogger(StatisticService.class, LogManager.getLogger().getMessageFactory());

    StatisticService(ExpensesRepository repo, ExpensesMapper mapper){
        this.mapper = mapper;
        this.repo = repo;
    }


    /**
     * Gibt eine Liste von allen allen Ausgaben eines Users im angegebenen Monat zurück
     * @param userId
     * @param month
     * @return
     */
    public List<StatisticsPerMonthDto> getAllExpensesFromUserPerMonth(long userId, int month) {
        List<Expense> expenseList =  repo.findAllByUserId(userId);
        List<StatisticsPerMonthDto> monthlyExpensesList = null;
        for (Expense expense: expenseList) {
            calendar.setTime(expense.getDate_Created());
            if ((calendar.get(Calendar.MONTH)+1) == month){
                monthlyExpensesList.add(mapper.mapExpenseToStatisticsPerMonthDto(expense));
            }
        }
        return monthlyExpensesList;
    }

    /**
     * Gibt eine Liste von allen allen Ausgaben eines Users im angegebenen Jahr zurück
     * @param userId
     * @param year
     * @return
     */
    public List<StatisticsPerYearDto> getAllExpensesFromUserPerYear(long userId, int year) {
        List<Expense> expenseList =  repo.findAllByUserId(userId);
        List<StatisticsPerYearDto> monthlyExpensesList = null;
        for (Expense expense: expenseList) {
            calendar.setTime(expense.getDate_Created());
            if ((calendar.get(Calendar.MONTH)+1) == year){
                monthlyExpensesList.add(mapper.mapExpenseToStatisticsPerYearDto(expense));
            }
        }
        return monthlyExpensesList;
    }

    /**
     * Gibt die Gesamten Ausgaben eines Users in einem Monat zurück
     * @param userId
     * @param month
     * @return
     */
    public int getAllExpensesSumFromUserPerMonth(long userId, int month) {
        List<Expense> expenseList =  repo.findAllByUserId(userId);
        int monthlyExpenses = 0;
        for (Expense expense: expenseList) {
            calendar.setTime(expense.getDate_Created());
            if ((calendar.get(Calendar.MONTH)+1) == month){
               monthlyExpenses += expense.getAmount();
            }
        }
        return monthlyExpenses;
    }

    /**
     * Gibt die Gesamten Ausgaben eines Users in einem Jahr zurück
     * @param userId
     * @param year
     * @return
     */
    public int getAllExpensesSumFromUserPerYear(long userId, int year) {
        List<Expense> expenseList =  repo.findAllByUserId(userId);
        int yearlyExpenses = 0;
        for (Expense expense: expenseList) {
            calendar.setTime(expense.getDate_Created());
            if (calendar.get(Calendar.YEAR) == year){
                yearlyExpenses += expense.getAmount();
            }
        }
        return yearlyExpenses;
    }
}
