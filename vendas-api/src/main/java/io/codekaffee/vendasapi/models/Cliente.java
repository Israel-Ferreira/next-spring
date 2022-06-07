package io.codekaffee.vendasapi.models;

import io.codekaffee.vendasapi.dto.ClienteFormRequest;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "CLIENTES")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NOME")
    private String nome;

    @Column(name = "CPF")
    private String cpf;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "TELEFONE")
    private String telefone;

    @Column(name = "DATA_NASCIMENTO")
    private LocalDate dataNascimento;

    @Column(name = "ENDERECO")
    private String endereco;

    @Column(name = "DATA_CADASTRO")
    private LocalDate dataCadastro;

    public Cliente() {
    }

    public Cliente(String nome, String cpf, String email, String telefone, LocalDate dataNascimento, String endereco) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
    }

    public Cliente(ClienteFormRequest formRequest){
        this.nome = formRequest.getNome();
        this.cpf = formRequest.getCpf();
        this.endereco = formRequest.getEndereco();
        this.email = formRequest.getEmail();
        this.dataNascimento = formRequest.getDataNascimento();
        this.telefone = formRequest.getTelefone();
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

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
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
}
