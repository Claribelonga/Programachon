import { use } from "react";
import { useState } from "react";

export default function useTarea(){
    const [titulo, setTitulo] = useState("");
    const [prioridad, setPrioridad] = useState("urgente");
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
        setPrioridad("urgente");
        setEstado("pendiente");
    }
    return [{titulo, categoria, prioridad, estado}, setDato, limpiarInput];
}