package io.codekaffee.vendasapi.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.codekaffee.vendasapi.models.Cliente;
import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public class ClienteFormRequest {

    private Long id;

    @NotNull
    @NotBlank(message = "o campo nome não pode estar em branco")
    private String nome;

    @NotNull
    @CPF(message = "CPF Inválido")
    private String cpf;

    @Email(message = "email inválido")
    private String email;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataNascimento;

    private String endereco;

    private String telefone;

    private LocalDate dataCadastro;

    public ClienteFormRequest() {
    }

    public ClienteFormRequest(Cliente cliente){
        this.id = cliente.getId();
        this.cpf = cliente.getCpf();
        this.nome = cliente.getNome();
        this.endereco = cliente.getEndereco();
        this.dataCadastro = cliente.getDataCadastro();
        this.dataNascimento = cliente.getDataNascimento();
        this.telefone = cliente.getTelefone();
        this.email = cliente.getEmail();

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

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }


    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public LocalDate getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(LocalDate dataCadastro) {
        this.dataCadastro = dataCadastro;
    }
}
