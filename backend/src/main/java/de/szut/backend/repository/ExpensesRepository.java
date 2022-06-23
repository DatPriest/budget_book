package de.szut.backend.repository;

import de.szut.backend.model.Expenses.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExpensesRepository extends JpaRepository<Expense,Long> {
    List<Expense> findAllByGroupId(long groupId);
    List<Expense> findAllByUserId(long userId);
    List<Expense> findAllByCategoryId(long categoryId);
    Expense findFirstByCategoryId(long categoryId);
    Expense findExpenseByGroupIdAndCategoryIdAndUserIdAndAmount(long groupId, long categoryId, long userId, float amount);
    boolean existsExpenseByCategoryIdAndAmountAndUserIdAndGroupIdAndDescription(long categoryId, float amount, long userId, long groupId, String description);
}
