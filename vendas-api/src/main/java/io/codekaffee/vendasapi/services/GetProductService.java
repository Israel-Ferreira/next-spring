package io.codekaffee.vendasapi.services;

import io.codekaffee.vendasapi.exceptions.NotFoundException;
import io.codekaffee.vendasapi.models.Produto;
import io.codekaffee.vendasapi.repositories.ProdutoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GetProductService {

    private final ProdutoRepository produtoRepository;

    public GetProductService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    public List<Produto> listProducts() {
        return  produtoRepository.findAll();
    }


    public Produto getProduct(Long id) {
        return produtoRepository.findById(id)
                .orElseThrow(NotFoundException::new);
    }
}
