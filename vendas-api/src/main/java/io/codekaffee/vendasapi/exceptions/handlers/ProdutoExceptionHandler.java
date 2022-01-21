package io.codekaffee.vendasapi.exceptions.handlers;

import io.codekaffee.vendasapi.dto.ErrorMsg;
import io.codekaffee.vendasapi.exceptions.CreateProductBadRequestException;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolation;
import java.util.Set;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ProdutoExceptionHandler {

    @ExceptionHandler(CreateProductBadRequestException.class)
    public ResponseEntity<ErrorMsg> handleProductBadRequest(CreateProductBadRequestException exception) {
        Set<String> violations = exception.getViolations().stream().map(ConstraintViolation::getMessage)
                .collect(Collectors.toSet());

        ErrorMsg  errorMsg = new ErrorMsg();
        errorMsg.setMsg(exception.getMessage());
        errorMsg.setViolations(violations);


        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMsg);
    }


    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ErrorMsg> handleConstraintViolationExc(ConstraintViolationException e) {
        ErrorMsg errorMsg = new ErrorMsg();
        errorMsg.setMsg(e.getMessage());
        errorMsg.setResponseStatus(422L);

        return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(errorMsg);
    }
}
