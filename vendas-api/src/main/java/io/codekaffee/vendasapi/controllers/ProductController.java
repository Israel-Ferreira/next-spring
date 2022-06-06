package io.codekaffee.vendasapi.controllers;

import io.codekaffee.vendasapi.dto.ProductFormRequest;
import io.codekaffee.vendasapi.dto.ProductResp;
import io.codekaffee.vendasapi.models.Produto;
import io.codekaffee.vendasapi.services.CreateProductService;
import io.codekaffee.vendasapi.services.DeleteProductService;
import io.codekaffee.vendasapi.services.GetProductService;
import io.codekaffee.vendasapi.services.UpdateProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/produtos")
public class ProductController {


    private final CreateProductService createProductService;
    private final UpdateProductService updateProductService;
    private final GetProductService getProductService;
    private final DeleteProductService deleteProductService;


    public ProductController(CreateProductService createProductService, UpdateProductService updateProductService, GetProductService getProductService, DeleteProductService deleteProductService) {
        this.createProductService = createProductService;
        this.updateProductService = updateProductService;
        this.getProductService = getProductService;
        this.deleteProductService = deleteProductService;
    }


    @GetMapping
    public ResponseEntity<List<ProductResp>> listProducts() throws InterruptedException {
        
        List<ProductResp> products =  getProductService.listProducts().stream()
                .map(ProductResp::new).collect(Collectors.toList());

        return  ResponseEntity.ok(products);
    }


    @GetMapping(value = "/{id}")
    public ResponseEntity<ProductResp> getProductById(@PathVariable("id") Long id) {
        Produto produto =  getProductService.getProduct(id);
        ProductResp resp =  new ProductResp(produto);

        return ResponseEntity.ok(resp);
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

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") Long id){
        deleteProductService.deleteProductById(id);
        return ResponseEntity.noContent().build();
    }
}
