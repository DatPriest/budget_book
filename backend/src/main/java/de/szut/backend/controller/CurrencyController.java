package de.szut.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Controller
@RequestMapping(path = "/api/v1/currency")
public class CurrencyController {
    private HttpClient httpClient;
    public CurrencyController() {
        HttpClient httpClient = HttpClient.newHttpClient();
    }

    @GetMapping(produces = "application/json")
    public ResponseEntity<String> getSymbols() {
        var request = HttpRequest.newBuilder(
                        URI.create("https://www.currency-api.com/symbols"))
                .header("accept", "application/json")
                .build();
        try {
            var data = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
            return new ResponseEntity(data.body(), HttpStatus.OK);

        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>("Get Currency symbols was not successful", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(path = "/{baseCurrency}/{toCurrency}", produces = "application/json")
    public ResponseEntity<String> getRate(@PathVariable String baseCurrency, @PathVariable String toCurrency) {
        var request = HttpRequest.newBuilder(
                        URI.create("https://www.currency-api.com/rates?base="))
                .header("accept", "application/json")
                .build();
        try {
            var data = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
            return new ResponseEntity(data.body(), HttpStatus.OK);

        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>("Get Currency symbols was not successful", HttpStatus.BAD_REQUEST);
        }
    }
}
