import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Spinner from "./Spinner"
import useClima from "../hooks/useClima"

const AppClima = () => {

  const { resultado,cargando,noResultado } = useClima()
  return (
    <>
        <main className="dos-columnas">
            <Formulario />
 {/* Ya que resultado es un objeto que inicia vacío, así indicados que si resultado en su atributo name (o cualquiera) tiene algo, entonces que muestre */}
            { cargando ? <Spinner /> : resultado?.name ? <Resultado /> : noResultado ? <p>{noResultado}</p> : <p>El clima se mostrará aquí</p>}
            
        </main>
    </>
  )
}

export default AppClima