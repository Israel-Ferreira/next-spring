package io.codekaffee.vendasapi.controllers;

import io.codekaffee.vendasapi.dto.ProductResp;
import io.codekaffee.vendasapi.models.Produto;
import io.codekaffee.vendasapi.services.CreateProductService;
import io.codekaffee.vendasapi.services.GetProductService;
import io.codekaffee.vendasapi.services.UpdateProductService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.codekaffee.vendasapi.dto.ProductFormRequest;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/produtos")
public class ProductController {


    private final CreateProductService createProductService;
    private final UpdateProductService updateProductService;
    private final GetProductService getProductService;


    public ProductController(CreateProductService createProductService, UpdateProductService updateProductService, GetProductService getProductService) {
        this.createProductService = createProductService;
        this.updateProductService = updateProductService;
        this.getProductService = getProductService;
    }


    @GetMapping
    public ResponseEntity<List<ProductResp>> listProducts() {
        List<ProductResp> products =  getProductService.listProducts().stream()
                .map(ProductResp::new).collect(Collectors.toList());

        return  ResponseEntity.ok(products);
    }
    

    @PostMapping
    public ResponseEntity<ProductResp> createProduct(@RequestBody ProductFormRequest productFormRequest) {
        Produto produto = createProductService.createProduct(productFormRequest);

        var resp = new ProductResp(produto);

        return ResponseEntity.status(HttpStatus.CREATED).body(resp);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Void> updateProduct(@PathVariable("id") Long id, @RequestBody ProductFormRequest productFormRequest) {
        updateProductService.updateProduct(id, productFormRequest);
        return ResponseEntity.noContent().build();
    }
}
