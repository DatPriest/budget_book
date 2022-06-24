package de.szut.backend.controller;

import com.google.gson.Gson;
import de.szut.backend.mapper.ExpensesMapper;
import de.szut.backend.model.Expenses.dtos.CreateExpenseDTO;
import de.szut.backend.model.Expenses.dtos.GetExpenseDTO;
import de.szut.backend.service.ExpensesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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
    public ResponseEntity<GetExpenseDTO> createCategory(@RequestBody CreateExpenseDTO expenseDTO) {
        GetExpenseDTO getDTO = this.ex_Mapper.mapExpenseToGetExpenseDto(this.ex_Service.createExpense(this.ex_Mapper.mapCreateExpensesDtoToExpense(expenseDTO)));
        return new ResponseEntity<>(getDTO, HttpStatus.OK);
    }

    @DeleteMapping(path = "/expense/{expenseId}", produces = "application/json")
    public ResponseEntity<String> deleteCategory(@PathVariable long expenseId) {
        try{
            this.ex_Service.deleteExpenseById(expenseId);
        }catch(Exception e){
            return new ResponseEntity<>("Failed",HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>("Success",HttpStatus.OK);
    }

    @GetMapping(path = "/expense/{expenseId}", produces = "application/json")
    public ResponseEntity<GetExpenseDTO> getExpenseById(@PathVariable long expenseId){
        GetExpenseDTO getDTO;
        try {
            getDTO = this.ex_Mapper.mapExpenseToGetExpenseDto(this.ex_Service.getExpenseById(expenseId));
        }catch(Exception e){
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(getDTO, HttpStatus.OK);
    }

    @GetMapping(path = "/group/{groupId}", produces = "application/json")
    public ResponseEntity<List<GetExpenseDTO>> getExpensesByGroupId(@PathVariable long groupId){
        ArrayList<GetExpenseDTO> result = new ArrayList<>();
        try {
            for(var ex : this.ex_Service.getAllExpensesByGroupId(groupId)){
                result.add(this.ex_Mapper.mapExpenseToGetExpenseDto(ex));
            }
        }catch(Exception e){
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


    @GetMapping(path = "/category/{categoryId}", produces = "application/json")
    public ResponseEntity<List<GetExpenseDTO>> getExpensesByCategoryId(@PathVariable long categoryId){
        ArrayList<GetExpenseDTO> result = new ArrayList<>();
        try{
            for(var ex : this.ex_Service.getAllExpensesByCategoryId(categoryId)){
                result.add(this.ex_Mapper.mapExpenseToGetExpenseDto(ex));
            }
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result,HttpStatus.OK);
    }

    @GetMapping(path = "/user/{userId}", produces = "application/json")
    public ResponseEntity<List<GetExpenseDTO>> getExpensesByUserId(@PathVariable long userId){
        ArrayList<GetExpenseDTO> result = new ArrayList<>();
        try{
            for(var ex : this.ex_Service.getAllExpensesByUserId(userId)){
                result.add(this.ex_Mapper.mapExpenseToGetExpenseDto(ex));
            }
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
