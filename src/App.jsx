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
      />
    </div>
  )
}

export default App