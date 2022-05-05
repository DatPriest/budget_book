package de.szut.backend.service;

import de.szut.backend.model.Expenses.Expense;
import de.szut.backend.repository.ExpensesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpensesService {
    private ExpensesRepository ex_Service;

    public ExpensesService(ExpensesRepository ex_Service){
        this.ex_Service = ex_Service;
    }

    public void createExpense(Expense expenseToCreate){
        this.ex_Service.save(expenseToCreate);
    }

    public List<Expense> getAllExpensesByGroupId(long groupId){
        return this.ex_Service.findAllByGroupId(groupId);
    }

    public List<Expense> getAllExpensesByUserId(long userId){
        return this.ex_Service.findAllByUserId(userId);
    }

    public Expense getExpenseById(long expenseId){
        return this.ex_Service.findById(expenseId).get();
    }

    public void deleteExpense(Expense expenseToDelete){
        this.ex_Service.delete(expenseToDelete);
    }
}
