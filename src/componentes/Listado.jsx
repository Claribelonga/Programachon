function Tarjeta({titulo, prioridad, categoria, eliminar}){
    console.log(titulo)
    return(
        <div className="Tarjeta">
            <span className="Eliminar" onClick={() => eliminar()}>x</span>
            <span>Titulo: {titulo}</span>
            <span>Categoria: {categoria}</span>
            <span>Prioridad: {prioridad}</span>
            <span>Estado:</span><button>Pendiente</button>
        </div>
    )
}

export default function Listado({tareas, eliminarTarea}){
    return(
        <div className='Panel' style={{backgroundColor:'#DADEE3'}}>
            <h3>Lista de Tareas</h3>
            <div className="Listado">
                {tareas.map((tarea, index) =>
                 <Tarjeta
                 key = {tarea.id}
                  eliminar = {() => eliminarTarea(tarea.id)}
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
