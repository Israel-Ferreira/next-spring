package io.codekaffee.vendasapi.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.codekaffee.vendasapi.dto.ProductFormRequest;

@RestController
@RequestMapping(value = "/api/produtos")
public class ProductController {
    

    @PostMapping
    public ResponseEntity<Void> createProduct(@RequestBody ProductFormRequest productFormRequest) {
        System.out.println(productFormRequest);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
