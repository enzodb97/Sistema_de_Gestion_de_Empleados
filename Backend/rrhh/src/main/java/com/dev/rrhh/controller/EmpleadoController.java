package com.dev.rrhh.controller;

import com.dev.rrhh.excepcion.RecursoNoEncontradoExcecion;
import com.dev.rrhh.model.Empleado;
import com.dev.rrhh.service.IEmpleadoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("rrhh-app")
@CrossOrigin(value="http://localhost:3000")
public class EmpleadoController {
    private static final Logger logger = LoggerFactory.getLogger(EmpleadoController.class);

    @Autowired
    private IEmpleadoService empleadoService;

    @GetMapping("/empleados")
    public List<Empleado> getEmpleados(){
        var empleados = empleadoService.listarEmpleados();
        empleados.forEach((empleado -> logger.info(empleados.toString())));
        return empleados;
    }
    @PostMapping("/empleados")
    public Empleado agregarEmpleado(@RequestBody Empleado empleado){
        logger.info("Empleado a agregar" + empleado);
        return empleadoService.saveEmpleado(empleado);
    }
    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> getEmpleadoById(@PathVariable Long id){
        Empleado empleado = empleadoService.findById(id);
        if(empleado == null)
            throw  new RecursoNoEncontradoExcecion( "No se encontró el id: " +id);
           return ResponseEntity.ok(empleado);
    }
    @PutMapping("/empleados/{id}")
    public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Long id, @RequestBody Empleado empleadoRecibido) {
        Empleado empleado = empleadoService.findById(id);
        if (empleado == null)
            throw new RecursoNoEncontradoExcecion("El id no existe: " + id);

        // Actualizamos todos los campos recibidos
        empleado.setNombre(empleadoRecibido.getNombre());
        empleado.setApellido(empleadoRecibido.getApellido());
        empleado.setDniEmpleado(empleadoRecibido.getDniEmpleado());
        empleado.setDepartamento(empleadoRecibido.getDepartamento());
        empleado.setSueldo(empleadoRecibido.getSueldo());

        empleadoService.saveEmpleado(empleado);
        return ResponseEntity.ok(empleado);
    }
    @DeleteMapping("/empleados/{id}")
    public ResponseEntity<Map<String, Boolean>>
    elimnarEmpleado(@PathVariable Long id){
        Empleado empleado = empleadoService.findById(id);
        if(empleado==null)
            throw new RecursoNoEncontradoExcecion("El id recibido no existe: " +id);
        empleadoService.deleteEmpleado(empleado);
        //json {"Eliminado":"true"}
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }

}
