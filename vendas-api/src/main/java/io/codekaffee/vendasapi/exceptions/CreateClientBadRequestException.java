package io.codekaffee.vendasapi.exceptions;

import io.codekaffee.vendasapi.dto.ClienteFormRequest;
import io.codekaffee.vendasapi.dto.ProductFormRequest;

import javax.validation.ConstraintViolation;
import java.util.LinkedHashSet;
import java.util.Set;

public class CreateClientBadRequestException extends RuntimeException {

    private Set<ConstraintViolation<ClienteFormRequest>> violations = new LinkedHashSet<>();

    public CreateClientBadRequestException() {
        super("Bad Request: Dados Inválidos");
    }


    public CreateClientBadRequestException(String message) {
        super(message);
    }

    public CreateClientBadRequestException(String message, Throwable cause) {
        super(message, cause);
    }

    public Set<ConstraintViolation<ClienteFormRequest>> getViolations() {
        return violations;
    }

    public void setViolations(Set<ConstraintViolation<ClienteFormRequest>> violations) {
        this.violations = violations;
    }
}
