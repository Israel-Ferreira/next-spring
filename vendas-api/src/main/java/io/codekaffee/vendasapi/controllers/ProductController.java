package io.codekaffee.vendasapi.controllers;

import io.codekaffee.vendasapi.models.Produto;
import io.codekaffee.vendasapi.services.CreateProductService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private CreateProductService createProductService;
    

    @PostMapping
    public ResponseEntity<Produto> createProduct(@RequestBody ProductFormRequest productFormRequest) {
        Produto produto = createProductService.createProduct(productFormRequest);

        return ResponseEntity.status(HttpStatus.CREATED).body(produto);
    }
}
