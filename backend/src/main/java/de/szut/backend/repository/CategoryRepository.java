package de.szut.backend.repository;

import de.szut.backend.model.Categorys.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {
    List<Category> findAllByGroupId(long groupId);
    Category findCategoryByNameAndGroupId(String name, long groupId);
}
