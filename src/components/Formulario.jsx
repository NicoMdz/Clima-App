import { useState } from "react"
import useClima from "../hooks/useClima"

const Formulario = () => {
  
  //State
  const [alerta,setAlerta] = useState("")
  //Context
  const { busqueda,datosBusqueda,consultarClima,setResultado } = useClima()
  const { ciudad,pais } = busqueda

  const handleSubmit = e => {
    e.preventDefault()

    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios")
      return
    }
    setAlerta("")

    consultarClima(busqueda)
    setResultado({})
  }
  return (
    <div className="contenedor">
      {/* Podriamos crear componente pero es muy sencillo, entonces no */}
      {alerta && <p>{alerta}</p>}
      <form 
        onSubmit={handleSubmit}
      >
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input 
            type="text" 
            name="ciudad" 
            id="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>

        <div className="campo">
          <label htmlFor="pais">País</label>
          <select 
            name="pais" 
            id="pais"
            onChange={datosBusqueda}
            value={pais}
          > 
            <option value="">-- Seleccione un País --</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>    
        </div>
        <input 
          type="submit" 
          value="Consultar Clima"
        />
      </form>
    </div>
  )
}

export default Formulario