package io.codekaffee.vendasapi.models;

import io.codekaffee.vendasapi.dto.ProductFormRequest;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "produtos")
public class Produto implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(length = 100)
    private String nome;


    @Column(unique = true)
    private String sku;

    @Column(length = 265)
    private String descricao;


    @Column(precision = 16, scale = 2)
    private BigDecimal preco;


    public Produto() {
    }

    public Produto(ProductFormRequest productFormRequest) {
        this.nome = productFormRequest.getProductName();
        this.descricao = productFormRequest.getDescription();
        this.preco = productFormRequest.getPrice();
        this.sku = productFormRequest.getSku();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Produto produto = (Produto) o;
        return Objects.equals(id, produto.id) && Objects.equals(nome, produto.nome) && Objects.equals(sku, produto.sku) && Objects.equals(descricao, produto.descricao) && Objects.equals(preco, produto.preco);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, sku, descricao, preco);
    }
}
