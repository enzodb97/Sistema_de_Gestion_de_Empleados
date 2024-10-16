import axios from "axios";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

export default function ListadoEmpleados() {
  const urlBase = "http://localhost:8080/rrhh-app/empleados";
  const [empleados, setEmpleados] = useState([]);
  useEffect(() => {
    cargarEmpleados();
  }, []);
  const cargarEmpleados = async () => {
    const resultado = await axios.get(urlBase);
    console.log("resultado de cargar empleados");
    console.log(resultado.data);
    setEmpleados(resultado.data);
  };
  const eliminarEmpleado = async(id)=>{
    await axios.delete(`${urlBase}/${id}`);
    cargarEmpleados();
  }
  return (
    <div className="container">
      <div className="container" style={{ margin: "30px" }}>
        <h3> Sistema de Recursos Humanos</h3>
      </div>
      <table className="table table-striped table-hover aling-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">DNI</th>
            <th scope="col">Departamento</th>
            <th scope="col">Sueldo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            //iteraccion array empleados
            empleados.map((empleados, indice) => (
              <tr key={indice}>
                <th scope="row">{empleados.idEmpleado}</th>
                <td>{empleados.nombre}</td>
                <td>{empleados.apellido}</td>
                <td>{empleados.dniEmpleado}</td>
                <td>{empleados.departamento}</td>
                <td>
                  <NumericFormat
                    value={empleados.sueldo}
                    displayType={"text"}
                    thousandSeparator=","
                    prefix={"$"}
                    decimalScale={2}
                    fixedDecimalScale
                  />
                </td>

                <td className="text-center">
                  <div>
                    <Link
                      to={`/editar/${empleados.idEmpleado}`}
                      className="btn btn-warning btn-sm me-3"
                    >
                      {" "}
                      Editar
                    </Link>
                    <button onClick={()=> eliminarEmpleado(empleados.idEmpleado)}
                    className="btn btn-danger btn-sm"
                    >Eliminar</button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
