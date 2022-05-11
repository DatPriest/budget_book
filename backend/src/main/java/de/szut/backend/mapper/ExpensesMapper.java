package de.szut.backend.mapper;

import de.szut.backend.model.Expenses.Expense;
import de.szut.backend.model.Expenses.dtos.CreateExpenseDTO;
import de.szut.backend.model.Expenses.dtos.GetExpenseDTO;
import org.springframework.stereotype.Service;

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

    public GetExpenseDTO mapExpenseToGetExpenseDto(Expense ExpenseToGet){
        GetExpenseDTO dtoToGet = new GetExpenseDTO();
        dtoToGet.setGroupId(ExpenseToGet.getGroupId());
        dtoToGet.setUserId(ExpenseToGet.getUserId());
        dtoToGet.setAmount(ExpenseToGet.getAmount());
        dtoToGet.setCategoryId(ExpenseToGet.getCategoryId());
        dtoToGet.setDate_Created(ExpenseToGet.getDate_Created());
        dtoToGet.setDescription(ExpenseToGet.getDescription());
        return dtoToGet;
    }
}
