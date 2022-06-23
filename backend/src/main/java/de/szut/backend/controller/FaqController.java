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

/**
 * Controller der API-Calls für die FAQ Tabelle
 */
@CrossOrigin
@RequestMapping(value = "/api/v1/faq")
@RestController
public class FaqController {

    private final FaqService service;
    public FaqController(FaqService _service) {
        this.service = _service;
    }

    /**
     * Neue Frage wird an die Datenbank übermittelt
     * @param postFaqDto
     * @return
     * @throws TypeNotPresentException
     */
    @PostMapping(path = "/create", consumes = "application/json", produces = "application/json")
    public ResponseEntity<FAQ> CreateFaq(@RequestBody PostFaqDto postFaqDto) throws TypeNotPresentException {
        return new ResponseEntity<>(service.createFaq(postFaqDto), HttpStatus.CREATED);
    }

    /**
     * Gibt alle Fragen zurück egal ob beantwortet oder nicht.
     * @return
     */
    @GetMapping(path = "/getAll", produces = "application/json")
    public ResponseEntity<String> GetAllFaqs() {
        List<OutputFaqDto> faqList = this.service.getAllOutputFaq();
        Gson gson = new Gson();
        return new ResponseEntity<>(gson.toJson(faqList), HttpStatus.OK);
    }

    /**
     * Gibt alle Fragen zurück die beantwortet sind
     * @return
     */
    @GetMapping(path = "/getAllWithAnswers", produces = "application/json")
    public ResponseEntity<String> GetAllFaqsWithAnswers() {
        List<OutputFaqDto> faqList = this.service.getAllOutputFaqWithAnswers();
        Gson gson = new Gson();
        return new ResponseEntity<>(gson.toJson(faqList), HttpStatus.OK);
    }

    /**
     * Gibt alle Fragen (und die Antworten falls es welche gibt) eines Benutzers zurück.
     * @param userId
     * @return
     * @throws TypeNotPresentException
     */
    @GetMapping(path = "/getAllFromUser/{userId}", produces = "application/json")
    public ResponseEntity<String> GetAllFAQFromUserId(@PathVariable long userId) throws TypeNotPresentException {
        List<OutputFaqDto> faqList = this.service.getAllFaqFromUser(userId);
        Gson gson = new Gson();
        return new ResponseEntity<>(gson.toJson(faqList), HttpStatus.OK);
    }
}
