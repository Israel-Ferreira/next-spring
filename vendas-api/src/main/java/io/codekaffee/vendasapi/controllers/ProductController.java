package io.codekaffee.vendasapi.controllers;

import io.codekaffee.vendasapi.dto.ProductResp;
import io.codekaffee.vendasapi.models.Produto;
import io.codekaffee.vendasapi.services.CreateProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.codekaffee.vendasapi.dto.ProductFormRequest;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/produtos")
public class ProductController {

    @Autowired
    private CreateProductService createProductService;
    

    @PostMapping
    public ResponseEntity<ProductResp> createProduct(@RequestBody ProductFormRequest productFormRequest) {
        Produto produto = createProductService.createProduct(productFormRequest);

        var resp = new ProductResp(produto);

        return ResponseEntity.status(HttpStatus.CREATED).body(resp);
    }
}
