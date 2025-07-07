import { use } from "react";
import { useState } from "react";

export default function useTarea(){
    const [titulo, setTitulo] = useState("");
    const [prioridad, setPrioridad] = useState(1);
    const [categoria, setCategoria] = useState("hogar");
    const [estado, setEstado] = useState("pendiente");

    const setDato = (campo, valor) => {
        switch (campo){
            case "titulo":
                setTitulo(valor);
                break
            case "prioridad": 
                setPrioridad(valor);
                break
            case "categoria":  
                setCategoria(valor);
                break
            default:
                break;
        }
    }
    const limpiarInput = () =>{
        setTitulo("");
        setCategoria("hogar");
        setPrioridad(1);
        setEstado("pendiente");
    }
    return [{titulo, categoria, prioridad, estado}, setDato, limpiarInput];
}
//el datos es el objeto (titulocategoriaprioridadestado)