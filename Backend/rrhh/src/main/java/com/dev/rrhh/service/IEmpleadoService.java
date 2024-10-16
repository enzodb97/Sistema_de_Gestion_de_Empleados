package com.dev.rrhh.service;

import com.dev.rrhh.model.Empleado;

import java.util.List;

public interface IEmpleadoService {
    public List<Empleado> listarEmpleados();

    public Empleado findById(Long idEmpleado);

    public Empleado saveEmpleado(Empleado empleado);

    public void deleteEmpleado(Empleado empleado);

}
