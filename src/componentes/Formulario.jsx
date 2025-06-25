import { use } from "react";
import { useState } from "react";
import useTarea from "../hooks/useTarea";

export default function Formulario({guardarTarea}){
    const [datos, setDato] = useTarea();

    const mostrarListado = (e) =>{
        e.preventDefault();
        guardarTarea(datos);
        console.log(datos);
    }

    return( 
        <div className='Panel' style={{backgroundColor:"lightgray"}}>
            <form className="Formulario">
                <input type="text" placeholder="titulo" value={datos.titulo} onChange={(e) => setDato("titulo",e.target.value)}/>
                <select name="categorias" id="categ" onChange={(e) => setDato("categoria",e.target.value)}>
                    <option value="hogar">Hogar</option>
                    <option value="escuela">Escuela</option>
                    <option value="trabajo">Trabajo</option>
                </select>
                <select name="prioridad" id="priori" onChange={(e) => setDato("prioridad",e.target.value)}>
                    <option value="urgente">Urgente</option>
                    <option value="no-urgente">No Urgente</option>
                </select>
                <button type="submit" onClick={(e) => mostrarListado(e)}>Guardar</button>
            </form>
      </div>
    )
}
