package de.szut.backend.mapper;

import de.szut.backend.dto.Statistics.StatisticsPerMonthDto;
import de.szut.backend.dto.Statistics.StatisticsPerYearDto;
import de.szut.backend.model.Expenses.Expense;
import de.szut.backend.model.Expenses.dtos.CreateExpenseDTO;
import de.szut.backend.model.Expenses.dtos.GetExpenseDTO;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.GregorianCalendar;

@Service
public class ExpensesMapper {

    public Expense mapCreateExpensesDtoToExpense(CreateExpenseDTO DTOToCreate){
        Expense toCreate = new Expense();
        toCreate.setGroupId(DTOToCreate.getGroupId());
        toCreate.setUserId(DTOToCreate.getUserId());
        toCreate.setAmount(DTOToCreate.getAmount());
        toCreate.setCategoryId(DTOToCreate.getCategoryId());
        toCreate.setDescription(DTOToCreate.getDescription());
        return toCreate;
    }

    public GetExpenseDTO mapExpenseToGetExpenseDto(Expense expenseToGet){
        GetExpenseDTO dtoToGet = new GetExpenseDTO();
        dtoToGet.setExpenseId(expenseToGet.getExpensesId());
        dtoToGet.setGroupId(expenseToGet.getGroupId());
        dtoToGet.setUserId(expenseToGet.getUserId());
        dtoToGet.setAmount(expenseToGet.getAmount());
        dtoToGet.setCategoryId(expenseToGet.getCategoryId());
        dtoToGet.setDate_Created(expenseToGet.getDate_Created());
        dtoToGet.setDescription(expenseToGet.getDescription());
        return dtoToGet;
    }

    public StatisticsPerMonthDto mapExpenseToStatisticsPerMonthDto(Expense expense){
        StatisticsPerMonthDto stats = new StatisticsPerMonthDto();
        GregorianCalendar cal = null;
        cal.setTime(expense.getDate_Created());
        stats.setMonth(cal.get(Calendar.MONTH)+1);
        stats.setAmount(expense.getAmount());
        return stats;
    }

    public StatisticsPerYearDto mapExpenseToStatisticsPerYearDto(Expense expense) {
        StatisticsPerYearDto stats = new StatisticsPerYearDto();
        GregorianCalendar cal = null;
        cal.setTime(expense.getDate_Created());
        stats.setYear(cal.get(Calendar.YEAR));
        stats.setAmount(expense.getAmount());
        return stats;
    }
}
