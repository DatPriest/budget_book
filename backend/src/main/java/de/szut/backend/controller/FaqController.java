package de.szut.backend.controller;


import com.google.gson.Gson;
import de.szut.backend.dto.GroupCreateDto;
import de.szut.backend.dto.OutputFaqDto;
import de.szut.backend.dto.PostFaqDto;
import de.szut.backend.model.FAQ;
import de.szut.backend.model.Group;
import de.szut.backend.model.User;
import de.szut.backend.service.FaqService;
import de.szut.backend.service.GroupService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RequestMapping(value = "/api/v1/faq")
@RestController
public class FaqController {

    private final FaqService service;
    public FaqController(FaqService _service) {
        this.service = _service;
    }

    /**
     * @param postFaqDto
     * @return
     * @throws TypeNotPresentException
     */
    @PostMapping(path = "/create", consumes = "application/json", produces = "application/json")
    public ResponseEntity<FAQ> CreateFaq(@RequestBody PostFaqDto postFaqDto) throws TypeNotPresentException {
        return new ResponseEntity<>(service.createFaq(postFaqDto), HttpStatus.CREATED);
    }

    @GetMapping(path = "/getAll", produces = "application/json")
    public String GetAllFaqs() {
        List<OutputFaqDto> faqList = this.service.getAllOutputFaq();
        Gson gson = new Gson();
        return gson.toJson(faqList);
    }

    @GetMapping(path = "/getAllWithAnswers", produces = "application/json")
    public String GetAllFaqsWithAnswers() {
        List<OutputFaqDto> faqList = this.service.getAllOutputFaqWithAnswers();
        Gson gson = new Gson();
        return gson.toJson(faqList);
    }

    /**
     * TODO:
     * @param userId
     * @return
     * @throws TypeNotPresentException
     */
    @GetMapping(path = "/getAllFromUser/{UserId}", produces = "application/json")
    public String GetUsersToGroup(@PathVariable long userId) throws TypeNotPresentException {
        List<OutputFaqDto> faqList = this.service.getAllFaqFromUser(userId);
        Gson gson = new Gson();
        return gson.toJson(faqList);
    }
}
