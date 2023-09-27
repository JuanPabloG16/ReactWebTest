export default function DetalleEstudiante({
    params
}){
    return(
        <main>
            <h1>Datos estudiantes</h1>
            <p>Codigo: {params.cod}</p>
        </main>
    )
}