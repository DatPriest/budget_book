package de.szut.backend.controller;

import com.google.gson.Gson;
import de.szut.backend.exceptions.CategoryBoundToExpenseException;
import de.szut.backend.mapper.CategoryMapper;
import de.szut.backend.model.Categorys.Category;
import de.szut.backend.model.Categorys.dtos.CreateCategoryDTO;
import de.szut.backend.model.Categorys.dtos.GetCategoryDTO;
import de.szut.backend.service.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<GetCategoryDTO> createCategory(@RequestBody CreateCategoryDTO categoryDTO) {
        GetCategoryDTO getDTO = this.c_Mapper.mapCategoryToGetCategoryDto(this.c_Service.createCategory(this.c_Mapper.mapCreateCategoryDtoToCategory(categoryDTO)));
        return new ResponseEntity<>(getDTO, HttpStatus.OK);
    }

    @DeleteMapping(path = "/category/{categoryId}", produces = "application/json")
    public ResponseEntity<String> deleteCategory(@PathVariable long categoryId) {
        try{
            this.c_Service.deleteCategoryById(categoryId);
        } catch (CategoryBoundToExpenseException ex){
            return new ResponseEntity<>("Category is bound to Expense", HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>("Success", HttpStatus.OK);
    }

    @GetMapping(path = "/category/{categoryId}", produces = "application/json")
    public ResponseEntity<GetCategoryDTO> getCategoryById(@PathVariable long categoryId) {
        GetCategoryDTO toGet;
        try{
            toGet = this.c_Mapper.mapCategoryToGetCategoryDto(this.c_Service.getCategoryById(categoryId));
        }catch(Exception e){
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(toGet,HttpStatus.OK);
    }

    @GetMapping(path = "/categories/{groupId}", produces = "application/json")
    public ResponseEntity<List<GetCategoryDTO>> getAllCategoriesForGroup(@PathVariable long groupId) {
        List<Category> toGet = this.c_Service.getAllCategoriesForGroup(groupId);
        ArrayList<GetCategoryDTO> resultSet = new ArrayList<>();
        for(var c : toGet){
            resultSet.add(this.c_Mapper.mapCategoryToGetCategoryDto(c));
        }
        return new ResponseEntity<>(resultSet, HttpStatus.OK);
    }
}
