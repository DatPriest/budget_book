package de.szut.backend.repository;

import de.szut.backend.model.Expenses.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExpensesRepository extends JpaRepository<Expense,Long> {
    List<Expense> findAllByGroupId(long groupId);
    List<Expense> findAllByUserId(long userId);
}
