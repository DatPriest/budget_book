package de.szut.backend.service;

import de.szut.backend.model.Categorys.Category;
import de.szut.backend.repository.CategoryRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoryService {
    private CategoryRepository c_Repository;
    public CategoryService(CategoryRepository c_Repository){
        this.c_Repository = c_Repository;
    }

    public void createCategory(Category categoryToCreate){
        this.c_Repository.save(categoryToCreate);
    }

    public void updateCategory(Category categoryToChange){
        this.c_Repository.save(categoryToChange);
    }

    public void deleteCategoryById(long categoryId){
        this.c_Repository.deleteById(categoryId);
    }

    public Category getCategoryById(long categoryId){
        return this.c_Repository.findCategoryById(categoryId);
    }

    public List<Category> getAllCategoriesForGroup(long groupId){
        return this.c_Repository.findAllByGroupId(groupId);
    }
}
