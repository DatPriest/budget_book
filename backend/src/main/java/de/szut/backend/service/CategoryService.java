package de.szut.backend.service;

import de.szut.backend.exceptions.CategoryBoundToExpenseException;
import de.szut.backend.model.Categorys.Category;
import de.szut.backend.model.Expenses.Expense;
import de.szut.backend.model.History.HistoryActionToProcess;
import de.szut.backend.repository.CategoryRepository;
import de.szut.backend.repository.ExpensesRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;

@Service
public class CategoryService {
    private CategoryRepository c_Repository;
    private ExpensesRepository ex_Repository;
    private HistoryLogService logService;

    public CategoryService(CategoryRepository c_Repository, ExpensesRepository ex_Repository, HistoryLogService logService){
        this.c_Repository = c_Repository;
        this.ex_Repository = ex_Repository;
        this.logService = logService;
    }

    public Category createCategory(Category categoryToCreate){
        var inDB = getCategoryByNameAndGroup(categoryToCreate.getName(), categoryToCreate.getGroupId());
        if(inDB != null){
            return inDB;
        }
        else
            log("Category Creation", "Category Name:" + categoryToCreate.getName(), categoryToCreate.getGroupId());
            return this.c_Repository.save(categoryToCreate);
    }

    public void deleteCategoryById(long categoryId) throws CategoryBoundToExpenseException {
        Expense expenseWithCategory = ex_Repository.findFirstByCategoryId(categoryId);
        if(expenseWithCategory != null){
            throw new CategoryBoundToExpenseException();
        }
        this.c_Repository.deleteById(categoryId);
    }

    public Category getCategoryById(long categoryId){
        return this.c_Repository.findById(categoryId).get();
    }

    public List<Category> getAllCategoriesForGroup(long groupId){
        return this.c_Repository.findAllByGroupId(groupId);
    }

    private Category getCategoryByNameAndGroup(String name, long groupId){
        return this.c_Repository.findCategoryByNameAndGroupId(name, groupId);
    }

    private void log (String action, String addition, long groupId){
        HistoryActionToProcess actionToProcess = new HistoryActionToProcess();
        actionToProcess.setAction(action);
        actionToProcess.setAdditionalInformation(addition);
        actionToProcess.setGroupId(groupId);
        logService.createLogEntry(actionToProcess);
    }
}
