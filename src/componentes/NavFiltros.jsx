import { use } from "react";
import { useState } from "react";

export default function navFiltros({setFiltroCategoria}){
    return(
        <div>
            <p>Filtros por categoria:</p>
            <button onClick={() => setFiltroCategoria("")}>Todas</button>
            <button onClick={() => setFiltroCategoria("hogar")}>Hogar</button>
            <button onClick={() => setFiltroCategoria("escuela")}>Escuela</button>
            <button onClick={() => setFiltroCategoria("trabajo")}>Trabajo</button>
        </div>
    )
}