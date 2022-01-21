package io.codekaffee.vendasapi.services;

import io.codekaffee.vendasapi.dto.ProductFormRequest;
import io.codekaffee.vendasapi.exceptions.CreateProductBadRequestException;
import io.codekaffee.vendasapi.models.Produto;
import io.codekaffee.vendasapi.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Validator;

@Service
public class CreateProductService {

    private final ProdutoRepository produtoRepository;

    private final Validator validator;

    @Autowired
    public CreateProductService(ProdutoRepository produtoRepository, Validator validator) {
        this.produtoRepository = produtoRepository;
        this.validator = validator;
    }


    public Produto createProduct(ProductFormRequest productFormRequest) {
        var validations = validator.validate(productFormRequest);

        if(!validations.isEmpty()) {
            var throwable = new CreateProductBadRequestException();
            throwable.setViolations(validations);

            throw throwable;
        }


        Produto produto = new Produto(productFormRequest);

        return produtoRepository.save(produto);

    }

}
