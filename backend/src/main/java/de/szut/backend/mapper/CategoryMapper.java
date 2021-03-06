package de.szut.backend.mapper;

import de.szut.backend.model.Categorys.Category;
import de.szut.backend.model.Categorys.dtos.CreateCategoryDTO;
import de.szut.backend.model.Categorys.dtos.GetCategoryDTO;
import org.springframework.stereotype.Service;

@Service
public class CategoryMapper {

    public Category mapCreateCategoryDtoToCategory(CreateCategoryDTO dtoToMap){
        Category category = new Category();

        category.setName(dtoToMap.getName());
        category.setGroupId((dtoToMap.getGroupId()));
        category.setIconName(dtoToMap.getIconName());
        return category;
    }

    public GetCategoryDTO mapCategoryToGetCategoryDto(Category categoryToMap){
        GetCategoryDTO categoryDto = new GetCategoryDTO();

        categoryDto.setCategoryId(categoryToMap.getCategoryId());
        categoryDto.setName(categoryToMap.getName());
        categoryDto.setDate_Created(categoryToMap.getDate_Created());
        categoryDto.setIconName(categoryToMap.getIconName());
        return categoryDto;
    }
}
