package io.codekaffee.vendasapi.dto;

import io.codekaffee.vendasapi.models.Produto;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
public class ProductResp {
    private Long id;
    private String descricao;
    private String nome;
    private BigDecimal preco;

    private String sku;

    public ProductResp(Produto produto) {
        this.id = produto.getId();
        this.nome = produto.getNome();
        this.descricao = produto.getDescricao();
        this.sku = produto.getSku();
        this.preco = produto.getPreco();
    }
}
