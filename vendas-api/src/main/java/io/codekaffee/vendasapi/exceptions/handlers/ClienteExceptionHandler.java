package io.codekaffee.vendasapi.exceptions.handlers;

import io.codekaffee.vendasapi.dto.ErrorMsg;
import io.codekaffee.vendasapi.exceptions.CreateClientBadRequestException;
import io.codekaffee.vendasapi.exceptions.CreateProductBadRequestException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolation;
import java.util.Set;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ClienteExceptionHandler {

    @ExceptionHandler(CreateClientBadRequestException.class)
    public ResponseEntity<ErrorMsg> handleProductBadRequest(CreateClientBadRequestException exception) {
        Set<String> violations = exception.getViolations().stream().map(ConstraintViolation::getMessage)
                .collect(Collectors.toSet());

        ErrorMsg  errorMsg = new ErrorMsg();
        errorMsg.setMsg(exception.getMessage());
        errorMsg.setViolations(violations);


        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMsg);
    }
}
