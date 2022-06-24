package de.szut.backend.service;

import de.szut.backend.dto.Statistics.GroupUserStatsDTO;
import de.szut.backend.dto.Statistics.StatisticsPerMonthDto;
import de.szut.backend.dto.Statistics.StatisticsPerYearDto;
import de.szut.backend.mapper.ExpensesMapper;
import de.szut.backend.model.Expenses.Expense;
import de.szut.backend.repository.ExpensesRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

@Service
public class StatisticService {
    ExpensesRepository repo;
    ExpensesMapper mapper;
    private static final Logger LOGGER = LogManager.getLogger(StatisticService.class, LogManager.getLogger().getMessageFactory());

    StatisticService(ExpensesRepository repo, ExpensesMapper mapper){
        this.mapper = mapper;
        this.repo = repo;
    }


    /**
     * Alle Ausgaben eines Users pro ausgewähltem Monat zurrückgeben
     * @param userId Von welchem User die Ausgaben zurückgegeben werden sollen
     * @return Eine Liste von allen Ausgaben des Monats
     */
    public List<GroupUserStatsDTO> getAllExpensesFromUserPerMonth(long userId) {
        List<Expense> expenseList =  repo.findAllByUserId(userId);
        List<GroupUserStatsDTO> monthlyExpensesList = new ArrayList<>();
        for (Expense expense: expenseList) {
            GregorianCalendar calendar = new GregorianCalendar();
            int year = calendar.get(Calendar.YEAR);
            int month = calendar.get(Calendar.MONTH)+1;
            calendar.setTime(expense.getDate_Created());
            if ((calendar.get(Calendar.MONTH)+1) == month && (calendar.get(Calendar.YEAR)) == year){
                monthlyExpensesList.add(mapper.mapExpenseToGroupUserStats(expense));
            }
        }
        return monthlyExpensesList;
    }

    /**
     * Alle Ausgaben eines Users pro ausgewähltem Jahr zurrückgeben
     * @param userId Von welchem User die Ausgaben zurückgegeben werden sollen
     * @return Eine Liste von allen Ausgaben des Jahres
     */
    public List<GroupUserStatsDTO> getAllExpensesFromUserPerYear(long userId) {
        List<Expense> expenseList =  repo.findAllByUserId(userId);
        List<GroupUserStatsDTO> yearlyExpensesList = new ArrayList<>();
        for (Expense expense: expenseList) {
            GregorianCalendar calendar = new GregorianCalendar();
            int year = calendar.get(Calendar.YEAR);
            calendar.setTime(expense.getDate_Created());
            if ((calendar.get(Calendar.YEAR)) == year){
                yearlyExpensesList.add(mapper.mapExpenseToGroupUserStats(expense));
            }
        }
        return yearlyExpensesList;
    }

    /**
     * Alle Ausgaben eines Users pro ausgewähltem Monat zurückgeben
     * @param userId Von welchem User die Ausgaben zurückgegeben werden sollen
     * @param month Aus welchem Jahr die Ausgaben zurückgegeben werden sollen
     * @return Die Summe von allen Ausgaben des Monats
     */
    public int getAllExpensesSumFromUserPerMonth(long userId, int month) {
        List<Expense> expenseList =  repo.findAllByUserId(userId);
        int monthlyExpenses = 0;
        for (Expense expense: expenseList) {
            GregorianCalendar calendar = new GregorianCalendar();
            calendar.setTime(expense.getDate_Created());
            if ((calendar.get(Calendar.MONTH)+1) == month){
               monthlyExpenses += expense.getAmount();
            }
        }
        return monthlyExpenses;
    }

    /**
     * Gibt die Gesamten Ausgaben eines Users in einem Jahr zurück
     * @param userId von welchem User die Ausgaben zurückgegeben werden sollen
     * @param year aus welchem Monat die Ausgaben zurückgegeben werden sollen
     * @return Die Summe mit allen Ausgaben des Jahres
     */
    public int getAllExpensesSumFromUserPerYear(long userId, int year) {
        List<Expense> expenseList =  repo.findAllByUserId(userId);
        int yearlyExpenses = 0;
        for (Expense expense: expenseList) {
            GregorianCalendar calendar = new GregorianCalendar();
            calendar.setTime(expense.getDate_Created());
            if (calendar.get(Calendar.YEAR) == year){
                yearlyExpenses += expense.getAmount();
            }
        }
        return yearlyExpenses;
    }

    /**
     * Alle Ausgaben einer Gruppe pro ausgewähltem Jahr zurrrückgeben
     * @param groupId Von welcher Gruppe die Ausgaben zurückgegeben werden sollen
     * @return Eine Liste mit allen Ausgaben des Jahres
     */
    public List<GroupUserStatsDTO> getAllExpensesFromGroupPerYear(long groupId) {
        List<Expense> expenseList =  repo.findAllByGroupId(groupId);
        List<GroupUserStatsDTO> yearlyExpensesList = new ArrayList<>();
        for (Expense expense: expenseList) {
            GregorianCalendar calendar = new GregorianCalendar();
            int year = calendar.get(Calendar.YEAR);
            calendar.setTime(expense.getDate_Created());
            if ((calendar.get(Calendar.YEAR)) == year){
                yearlyExpensesList.add(mapper.mapExpenseToGroupUserStats(expense));
            }
        }
        return yearlyExpensesList;
    }

    /**
     * Alle Ausgaben summiert einer Gruppe pro ausgewähltem Jahr zurrückgeben
     * @param groupId Von welcher Gruppe die Ausgaben zurückgegeben werden sollen
     * @param year Aus welchem Jahr die Ausgaben zurückgegeben werden sollen
     * @return Die Summe aller Ausgaben des Jahres
     */
    public int getAllExpensesSumFromGroupPerYear(long groupId, int year) {
        List<Expense> expenseList =  repo.findAllByUserId(groupId);
        int yearlyExpenses = 0;
        for (Expense expense: expenseList) {
            GregorianCalendar calendar = new GregorianCalendar();
            calendar.setTime(expense.getDate_Created());
            if (calendar.get(Calendar.YEAR) == year){
                yearlyExpenses += expense.getAmount();
            }
        }
        return yearlyExpenses;
    }

    /**
     * Alle Ausgaben einer Gruppe pro ausgewähltem Monat zurückgeben
     * @param groupId Von welcher Gruppe die Ausgaben zurückgegeben werden sollen
     * @return Eine Liste mit allen Ausgaben des Monats
     */
    public List<GroupUserStatsDTO> getAllExpensesFromGroupPerMonth(long groupId) {
        List<Expense> expenseList =  repo.findAllByGroupId(groupId);
        List<GroupUserStatsDTO> monthlyExpensesList = new ArrayList<>();
        for (Expense expense: expenseList) {
            GregorianCalendar calendar = new GregorianCalendar();
            int year = calendar.get(Calendar.YEAR);
            int month = calendar.get(Calendar.MONTH) +1;
            calendar.setTime(expense.getDate_Created());
            if ((calendar.get(Calendar.MONTH)+1) == month && (calendar.get(Calendar.YEAR)) == year){
                monthlyExpensesList.add(mapper.mapExpenseToGroupUserStats(expense));
            }
        }
        return monthlyExpensesList;
    }

    public List<GroupUserStatsDTO> getAllExpensesFromGroupUser(long groupId, long userId) {
        List<Expense> expenseList =  repo.findAllByGroupId(groupId);
        List<GroupUserStatsDTO> expensesList = new ArrayList<>();
        for (Expense expense: expenseList) {
            if (expense.getUserId() == userId){
                expensesList.add(mapper.mapExpenseToGroupUserStats(expense));
            }
        }
        return expensesList;
    }

    public List<GroupUserStatsDTO> getAllExpensesFromGroupUserFromThisMonth(long groupId, long userId) {
        List<Expense> expenseList =  repo.findAllByGroupId(groupId);
        List<GroupUserStatsDTO> monthlyExpensesList = new ArrayList<>();
        for (Expense expense: expenseList) {
            GregorianCalendar calendar = new GregorianCalendar();
            int year = calendar.get(Calendar.YEAR);
            int month = calendar.get(Calendar.MONTH) +1;
            calendar.setTime(expense.getDate_Created());
            if ((calendar.get(Calendar.MONTH)+1) == month && expense.getUserId() == userId && (calendar.get(Calendar.YEAR)) == year){
                monthlyExpensesList.add(mapper.mapExpenseToGroupUserStats(expense));
            }
        }
        return monthlyExpensesList;
    }

    public List<GroupUserStatsDTO> getAllExpensesFromGroupUserFromThisYear(long groupId, long userId) {
        List<Expense> expenseList =  repo.findAllByGroupId(groupId);
        List<GroupUserStatsDTO> yearlyExpensesList = new ArrayList<>();
        for (Expense expense: expenseList) {
            GregorianCalendar calendar = new GregorianCalendar();
            int year = calendar.get(Calendar.YEAR);
            calendar.setTime(expense.getDate_Created());
            if ((calendar.get(Calendar.YEAR)) == year && expense.getUserId() == userId){
                yearlyExpensesList.add(mapper.mapExpenseToGroupUserStats(expense));
            }
        }
        return yearlyExpensesList;
    }
}
