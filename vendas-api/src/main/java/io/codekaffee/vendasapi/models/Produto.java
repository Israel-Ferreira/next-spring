package io.codekaffee.vendasapi.models;

import io.codekaffee.vendasapi.dto.ProductFormRequest;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "produtos")
public class Produto implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(length = 100, name = "NOME")
    private String nome;


    @Column(name = "SKU", unique = true)
    private String sku;

    @Column(name = "DESCRICAO", length = 255)
    private String descricao;


    @Column(name = "PRECO", precision = 16, scale = 2)
    private BigDecimal preco;


    @Column(name = "DATA_CADASTRO")
    private LocalDate dataCadastro;


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

    public LocalDate getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(LocalDate dataCadastro) {
        this.dataCadastro = dataCadastro;
    }


    @PrePersist
    private void addDataCadastro() {
        this.dataCadastro = LocalDate.now();
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
