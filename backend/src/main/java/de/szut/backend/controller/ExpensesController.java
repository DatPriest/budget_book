package de.szut.backend.controller;

import com.google.gson.Gson;
import de.szut.backend.mapper.ExpensesMapper;
import de.szut.backend.model.Expenses.dtos.CreateExpenseDTO;
import de.szut.backend.model.Expenses.dtos.GetExpenseDTO;
import de.szut.backend.service.ExpensesService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/v1/expenses")
public class ExpensesController {
    private ExpensesService ex_Service;
    private ExpensesMapper ex_Mapper;
    
    public ExpensesController(ExpensesService ex_Service, ExpensesMapper ex_Mapper){
        this.ex_Service = ex_Service;
        this.ex_Mapper = ex_Mapper;
    }

    @PostMapping(path = "/expense", produces = "application/json")
    public String createCategory(@RequestBody CreateExpenseDTO expenseDTO) {
        GetExpenseDTO getDTO = this.ex_Mapper.mapExpenseToGetExpenseDto(this.ex_Service.createExpense(this.ex_Mapper.mapCreateExpensesDtoToExpense(expenseDTO)));
        Gson gson = new Gson();
        return gson.toJson(getDTO);
    }

    @DeleteMapping(path = "/expense/{expenseId}", produces = "application/json")
    public void deleteCategory(@PathVariable long expenseId) {
        this.ex_Service.deleteExpenseById(expenseId);
    }

    @GetMapping(path = "/expense/{expenseId}", produces = "application/json")
    public String getExpenseById(@PathVariable long expenseId){
        GetExpenseDTO getDTO = this.ex_Mapper.mapExpenseToGetExpenseDto(this.ex_Service.getExpenseById(expenseId));
        Gson gson = new Gson();
        return gson.toJson(getDTO);
    }

    @GetMapping(path = "/group/{groupId}", produces = "application/json")
    public String getExpensesByGroupId(@PathVariable long groupId){
        ArrayList<GetExpenseDTO> result = new ArrayList<>();
        for(var ex : this.ex_Service.getAllExpensesByGroupId(groupId)){
            result.add(this.ex_Mapper.mapExpenseToGetExpenseDto(ex));
        }
        Gson gson = new Gson();
        return gson.toJson(result);
    }

    @GetMapping(path = "/category/{categoryId}", produces = "application/json")
    public String getExpensesByCategoryId(@PathVariable long categoryId){
        ArrayList<GetExpenseDTO> result = new ArrayList<>();
        for(var ex : this.ex_Service.getAllExpensesByCategoryId(categoryId)){
            result.add(this.ex_Mapper.mapExpenseToGetExpenseDto(ex));
        }
        Gson gson = new Gson();
        return gson.toJson(result);
    }

    @GetMapping(path = "/user/{userId}", produces = "application/json")
    public String getExpensesByUserId(@PathVariable long userId){
        ArrayList<GetExpenseDTO> result = new ArrayList<>();
        for(var ex : this.ex_Service.getAllExpensesByUserId(userId)){
            result.add(this.ex_Mapper.mapExpenseToGetExpenseDto(ex));
        }
        Gson gson = new Gson();
        return gson.toJson(result);
    }
}
