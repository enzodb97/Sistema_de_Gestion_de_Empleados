import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegador from "./plantilla/navegador";
import AgregarEmpleado from "./empleados/AgregarEmpleado";
import EditarEmpleado from "./empleados/EditarEmpleado";


function App() {
  return (
    <div className="container">
     <BrowserRouter>
     <Navegador/>
     <Routes>
      <Route exact path='/' element={<ListadoEmpleados/>}/>
      <Route exact path='/agregar' element={<AgregarEmpleado/>}/>
      <Route exact path='/editar/:id' element={<EditarEmpleado/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
