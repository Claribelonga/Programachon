import { use } from "react";
import { useState } from "react";

export default function navFiltros(){
    return(
        <div>
            <p>Filtros por categoria:</p>
            <button>Hogar</button>
            <button>Escuela</button>
            <button>Trabajo</button>
        </div>
    )
}