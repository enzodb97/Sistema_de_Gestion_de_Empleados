package com.dev.rrhh.service;

import com.dev.rrhh.model.Empleado;
import com.dev.rrhh.repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmpleadoService implements IEmpleadoService{
    @Autowired
    private EmpleadoRepository empleadoRepository;

    @Override
    public List<Empleado> listarEmpleados() {
        return empleadoRepository.findAll();
    }

    @Override
    public Empleado findById(Long idEmpleado) {
       Empleado empleado = empleadoRepository.findById(idEmpleado).orElse(null);
       return empleado;
    }

    @Override
    public Empleado saveEmpleado(Empleado empleado) {
        return empleadoRepository.save(empleado);
    }

    @Override
    public void deleteEmpleado(Empleado empleado) {
        empleadoRepository.delete(empleado);
    }
}
