package io.codekaffee.vendasapi.services;

import io.codekaffee.vendasapi.dto.ClienteFormRequest;
import io.codekaffee.vendasapi.exceptions.CreateClientBadRequestException;
import io.codekaffee.vendasapi.exceptions.CreateProductBadRequestException;
import io.codekaffee.vendasapi.exceptions.NotFoundException;
import io.codekaffee.vendasapi.models.Cliente;
import io.codekaffee.vendasapi.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Validator;
import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    private final ClienteRepository repository;
    private final Validator validator;

    @Autowired
    public ClienteService(ClienteRepository repository, Validator validator) {
        this.repository = repository;
        this.validator = validator;
    }


    public List<Cliente> listAll() {
        return  repository.findAll();
    }

    public Cliente findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new NotFoundException("Cliente Não Encontrado"));
    }


    public void atualizarCliente(Long id, ClienteFormRequest clienteFormRequest){
        Optional<Cliente> clienteDb =  repository.findById(id);

        if(clienteDb.isEmpty()){
            throw new NotFoundException("Cliente não encontrado");
        }


        Cliente cliente = new Cliente(clienteFormRequest);
        cliente.setId(id);

        repository.save(cliente);
    }


    public Cliente create(ClienteFormRequest formRequest){
        var validations = validator.validate(formRequest);

        System.out.println(formRequest.getCpf().trim());

        if(!validations.isEmpty()) {
            var throwable = new CreateClientBadRequestException();
            throwable.setViolations(validations);

            throw throwable;
        }


        Cliente cliente = new Cliente(formRequest);

        return repository.save(cliente);
    }
}
