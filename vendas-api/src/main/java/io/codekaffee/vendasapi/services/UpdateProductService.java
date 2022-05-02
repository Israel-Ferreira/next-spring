package io.codekaffee.vendasapi.services;

import io.codekaffee.vendasapi.dto.ProductFormRequest;
import io.codekaffee.vendasapi.exceptions.NotFoundException;
import io.codekaffee.vendasapi.models.Produto;
import io.codekaffee.vendasapi.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UpdateProductService {

    private final ProdutoRepository produtoRepository;

    @Autowired
    public UpdateProductService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    public void updateProduct(Long id, ProductFormRequest productFormRequest) {

        Optional<Produto> produtoDb =  produtoRepository.findById(id);

        if(produtoDb.isEmpty()) {
            throw new NotFoundException();
        }

        Produto produto = productFormRequest.toModel();
        produto.setId(id);


    }
}
