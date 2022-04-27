package de.szut.backend.controller;

import com.google.gson.Gson;
import de.szut.backend.mapper.CategoryMapper;
import de.szut.backend.model.Categorys.Category;
import de.szut.backend.model.Categorys.dtos.CreateCategoryDTO;
import de.szut.backend.model.Categorys.dtos.GetCategoryDTO;
import de.szut.backend.model.History.HistoryLogEntry;
import de.szut.backend.service.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/v1/categories")
public class CategoryController {
    private CategoryService c_Service;
    private CategoryMapper c_Mapper;
    public CategoryController(CategoryService c_Service, CategoryMapper c_Mapper){
        this.c_Service = c_Service;
        this.c_Mapper = c_Mapper;
    }

    @PostMapping(path = "/category", produces = "application/json")
    public void createCategory(@RequestBody CreateCategoryDTO categoryDTO) {
        this.c_Service.createCategory(this.c_Mapper.mapCreateCategoryDtoToCategory(categoryDTO));
    }

    @PutMapping(path = "/category", produces = "application/json")
    public void updateCategory(@RequestBody CreateCategoryDTO categoryDTO) {
        this.c_Service.updateCategory(this.c_Mapper.mapCreateCategoryDtoToCategory(categoryDTO));
    }

    @DeleteMapping(path = "/category/{categoryId}", produces = "application/json")
    public void deleteCategory(@PathVariable long categoryId) {
        this.c_Service.deleteCategoryById(categoryId);
    }

    @GetMapping(path = "/category/{categoryId}", produces = "application/json")
    public String getCategoryById(@PathVariable long categoryId) {
        GetCategoryDTO toGet = this.c_Mapper.mapCategoryToGetCategoryDto(this.c_Service.getCategoryById(categoryId));
        Gson gson = new Gson();
        return gson.toJson(toGet);
    }

    @GetMapping(path = "/category/{categoryId}", produces = "application/json")
    public String getAllCategoriesForGroup(@PathVariable long groupId) {
        List<Category> toGet = this.c_Service.getAllCategoriesForGroup(groupId);
        ArrayList<GetCategoryDTO> resultSet = new ArrayList<>();
        for(var c : toGet){
            resultSet.add(this.c_Mapper.mapCategoryToGetCategoryDto(c));
        }
        Gson gson = new Gson();
        return gson.toJson(toGet);
    }
}
