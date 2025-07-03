function Tarjeta({titulo, prioridad, categoria, estado, eliminar, cambiarEstado}){
    return(
        <div className="Tarjeta">
            <span className="Eliminar" onClick={() => eliminar()}>x</span>
            <span>Titulo: {titulo}</span>
            <span>Categoria: {categoria}</span>
            <span>Prioridad: {prioridad == 1 ? "urgente" : "no urgente"}</span>
            <span>Estado:</span><button onClick={() => cambiarEstado()}>{estado}</button>
        </div>
    )
}

export default function Listado({tareas, eliminarTarea, cambiarEstado}){
    return(
        <div className='Panel listado' style={{backgroundColor:'#DADEE3'}}>
            <h3>Lista de Tareas</h3>
            <div className="Listado">
                {tareas.map((tarea, index) =>
                 <Tarjeta
                 key = {tarea.id}
                  eliminar = {() => eliminarTarea(tarea.id)}
                  cambiarEstado = {() =>cambiarEstado(tarea.id)}
                  titulo = {tarea.titulo}
                  categoria = {tarea.categoria}
                  prioridad = {tarea.prioridad}
                  estado = {tarea.estado}
                 />
                )}
            </div>
        </div>
    );
}
