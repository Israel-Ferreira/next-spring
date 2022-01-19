package io.codekaffee.vendasapi.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HelloWorldController {

    @GetMapping
    public ResponseEntity<String> helloWorld(){
        var greeting = "Hello World";
        return ResponseEntity.ok(greeting);
    }
}
