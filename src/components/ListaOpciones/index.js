import "./ListaOpciones.css";

const ListaOpciones = (props) => {

    const equipos = [
        "Programación",
        "Front End",
        "Data Scienc",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value = {props.value} onChange = {manejarCambio}>
            <option value="" disabled defaultValue = "" hidden> Seleccionar equipo </option>
            {equipos.map((equipo,index) =>{
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones
