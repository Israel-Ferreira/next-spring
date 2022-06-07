package io.codekaffee.vendasapi.controllers;

import io.codekaffee.vendasapi.dto.ClienteFormRequest;
import io.codekaffee.vendasapi.models.Cliente;
import io.codekaffee.vendasapi.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestControllerAdvice
@CrossOrigin("*")
@RequestMapping(value = "/api/clientes")
public class ClientesController {

    private final ClienteService clienteService;

    @Autowired
    public ClientesController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @GetMapping
    public ResponseEntity<List<Cliente>> listarClientes() {
        var clientes = clienteService.listAll();
        return ResponseEntity.ok(clientes);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Cliente> buscarClientePeloId(@PathVariable("id") Long id) {
        Cliente cliente =  clienteService.findById(id);
        return ResponseEntity.ok(cliente);
    }

    @PostMapping
    public ResponseEntity<ClienteFormRequest> adicionarCliente(@RequestBody ClienteFormRequest dto) {
        Cliente cliente =  clienteService.create(dto);
        ClienteFormRequest resp = new ClienteFormRequest(cliente);

        return ResponseEntity.status(HttpStatus.CREATED).body(resp);
    }


    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> adicionarCliente(@PathVariable("id") Long id, @RequestBody ClienteFormRequest dto) {
        clienteService.atualizarCliente(id, dto);
        return ResponseEntity.noContent().build();
    }



    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deletarCliente(@PathVariable("id") Long id) {
        return ResponseEntity.noContent().build();
    }

}
