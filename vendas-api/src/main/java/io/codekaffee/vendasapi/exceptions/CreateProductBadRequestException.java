package io.codekaffee.vendasapi.exceptions;

import io.codekaffee.vendasapi.dto.ProductFormRequest;

import javax.validation.ConstraintViolation;
import java.util.LinkedHashSet;
import java.util.Set;

public class CreateProductBadRequestException extends RuntimeException {

    private Set<ConstraintViolation<ProductFormRequest>> violations = new LinkedHashSet<>();

    public CreateProductBadRequestException() {
        super("Bad Request: Dados Inválidos");
    }


    public CreateProductBadRequestException(String message) {
        super(message);
    }

    public CreateProductBadRequestException(String message, Throwable cause) {
        super(message, cause);
    }

    public Set<ConstraintViolation<ProductFormRequest>> getViolations() {
        return violations;
    }

    public void setViolations(Set<ConstraintViolation<ProductFormRequest>> violations) {
        this.violations = violations;
    }
}
