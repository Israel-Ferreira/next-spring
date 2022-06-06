package io.codekaffee.vendasapi.services;

import io.codekaffee.vendasapi.exceptions.NotFoundException;
import io.codekaffee.vendasapi.models.Produto;
import io.codekaffee.vendasapi.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DeleteProductService {

    private final ProdutoRepository produtoRepository;

    @Autowired
    public DeleteProductService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    public void deleteProductById(Long id) {
        Optional<Produto> produto = produtoRepository.findById(id);

        if(produto.isEmpty()){
            throw new NotFoundException();
        }

        produtoRepository.deleteById(id);
    }
}
