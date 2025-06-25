import { use } from "react";
import { useState } from "react";

export default function useTarea(){
    const [titulo, setTitulo] = useState("");
    const [prioridad, setPrioridad] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("pendiente");

    const setDato = (campo, valor) => {
        switch (campo){
            case "titulo":
                setTitulo(valor);
                break
            case "prioridad": 
                setPrioridad(valor);
                break
            case "cateogria":  
                setCategoria(valor);
                break
            default:
                break;
        }
    }
    return [{titulo, prioridad, categoria, estado}, setDato];
}