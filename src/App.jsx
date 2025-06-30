import { useState } from 'react'
import Formulario from './componentes/Formulario';
import NavFiltros from './componentes/NavFiltros';
import Listado from './componentes/Listado';
import useTarea from "./hooks/useTarea";
import './App.css'

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  const [id, setId] = useState(0);
  const [tareas, setTarea] = useState([]);
  // const [datos, setDato] = useTarea();

  const guardarTarea = (tarea) =>{
    const tareasNuevo = [...tareas];
    tareasNuevo.push({...tarea, id});
    console.log(tareasNuevo);
    setTarea(tareasNuevo);
    setId(id + 1);
  }
  const eliminarTarea = (tareaId) => {
    const tareasNuevo = [...tareas];
    const position = tareasNuevo.findIndex((tarea) => tarea.id === tareaId);
    tareasNuevo.splice(position, 1);
    setTarea(tareasNuevo);
  }

  const cambiarEstado = (tareaId) =>{
    console.log("Se cambió el estado de la tarea con id:", tareaId);
    const tareasNuevo = tareas.map((tarea) =>{
      if (tarea.id === tareaId){
        let nuevoEstado = "";
        switch (tarea.estado){
          case "pendiente":
            nuevoEstado = "en proceso";
            break
          case "en proceso":
              nuevoEstado = "finalizado";
              break;
          default:
            nuevoEstado = "pendiente";
        }
        console.log("nuevo estado:", nuevoEstado);
        return{...tarea, estado: nuevoEstado};
      }
      return tarea;
    })
    setTarea(tareasNuevo);
  }

  return(
    <div className='App'>
      <button onClick={toggleForm}>{showForm ? "Ocultar Formulario" : "Mostrar Formulario"}</button>
      {showForm && 
      <Formulario
      guardarTarea = {(tarea) => guardarTarea(tarea)}
      />
      }
      <NavFiltros
      />
      <Listado
      tareas = {tareas}
      eliminarTarea={(tareaId) => eliminarTarea(tareaId)}
      cambiarEstado={(tareaId) => cambiarEstado(tareaId)}
      />
    </div>
  )
}

export default App