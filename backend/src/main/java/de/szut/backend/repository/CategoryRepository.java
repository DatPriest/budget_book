package de.szut.backend.repository;

import de.szut.backend.model.Categorys.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category,Long> {
    Category findCategoryById(long categoryId);
    List<Category> findAllByGroupId(long groupId);
}
