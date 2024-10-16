package com.dev.rrhh.excepcion;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RecursoNoEncontradoExcecion extends RuntimeException{
    public RecursoNoEncontradoExcecion (String mensaje){
        super(mensaje);
    }
}
