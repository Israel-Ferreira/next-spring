package io.codekaffee.vendasapi.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.codekaffee.vendasapi.models.Produto;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
public class ProductResp {
    private Long id;
    private String descricao;
    private String nome;
    private BigDecimal preco;

    private String sku;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataCriacao;



    public ProductResp(Produto produto) {
        this.id = produto.getId();
        this.nome = produto.getNome();
        this.descricao = produto.getDescricao();
        this.sku = produto.getSku();
        this.preco = produto.getPreco();
        this.dataCriacao = produto.getDataCadastro();
    }
    
}
