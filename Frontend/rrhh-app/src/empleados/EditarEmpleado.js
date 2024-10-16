import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditarEmpleado() {
    const urlBase= "http://localhost:8080/rrhh-app/empleados";

    let navegacion = useNavigate();
const {id} = useParams ();

    const [empleado, setEmpleado]=useState({
        nombre:"",
        apellido:"",
        departamento:"",
        dniEmpleado:"",
        sueldo:""
    })
    const {nombre, apellido, departamento, dniEmpleado,sueldo} = empleado

useEffect(()=>{
    cargarEmpleado();

},[])
const cargarEmpleado = async ()=>{
    const resultado = await axios.get(`${urlBase}/${id}`)
    setEmpleado(resultado.data); 
}

    const onInputChange = (e)=> {
        //spread operator ... (expansion atributos)
        setEmpleado ({...empleado, [e.target.name]: e.target.value})
    }
const onSubmit = async (e)=> {
    e.preventDefault();
    
    await axios.put(`${urlBase}/${id}`, empleado);
    //redirigimos a la pagina de inicio
    navegacion('/');

}

  return (
    <div className='container'>
        <div className='container text-center' style={{marging: '30px'}}>
            <h3>
                Editar Empleado
            </h3>

        </div>
        <form onSubmit={(e) => onSubmit(e)}>
  <div className="mb-3">
    <label htmlFor="nombre" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="nombre" name='nombre' required={true} value={nombre} onChange={(e)=> onInputChange(e)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="apellido" className="form-label">Apellido</label>
    <input type="text" className="form-control" id="apellido" name='apellido' value={apellido} onChange={(e)=> onInputChange(e)} />
  </div>
  <div className="mb-3">
    <label htmlFor="departamento" className="form-label">Departamento</label>
    <input type="text" className="form-control" id="departamento" name='departamento'value={departamento} onChange={(e)=> onInputChange(e)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="dniEmpleado" className="form-label">DNI</label>
    <input type="text" className="form-control" id="dniEmpleado" name='dniEmpleado' value={dniEmpleado} onChange={(e)=> onInputChange(e)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="sueldo" className="form-label">Sueldo</label>
    <input type="number" step="any" className="form-control" id="sueldo" name='sueldo' value={sueldo} onChange={(e)=> onInputChange(e)}/>
  </div>
  <div className='text-center'>
  <button type="submit"
   className="btn btn-warning btn-sm me-3">Guardar</button>
   <a href='/' className='btn btn-danger btn-sm'>Regresar </a>
  </div>
  
</form>

    </div>
  )
}
