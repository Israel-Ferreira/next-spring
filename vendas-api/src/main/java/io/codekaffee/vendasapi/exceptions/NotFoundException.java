package io.codekaffee.vendasapi.exceptions;

public class NotFoundException extends RuntimeException {
    public NotFoundException() {
        super("Produto não encontrado na base de dados");
    }

    public NotFoundException(String message) {
        super(message);
    }

    public NotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public NotFoundException(Throwable cause) {
        super(cause);
    }
}
