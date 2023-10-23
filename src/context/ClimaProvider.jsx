import { createContext, useState } from "react"
import axios from "axios"

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {


  const [busqueda,setBusqueda] = useState({
    ciudad: "",
    pais: ""
  })
  
  const [resultado,setResultado] = useState({})
  const [cargando,setCargando] = useState(false)
  const [noResultado,setNoResultado] = useState("")

  const datosBusqueda = e => {
    setBusqueda({
        ...busqueda,
        [e.target.name]: e.target.value
    })
  }
  //Llamada API con Axios
  const consultarClima = async datos => {
    setCargando(true)
    setNoResultado("")
    try {
        const { ciudad, pais } = datos

        const appId = import.meta.env.VITE_API_KEY

        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
        //Primera llamada para adquirir lay y lon con lo escrito ingresado en el form
        const { data } = await axios(url)
        const { lat,lon } = data[0]

        const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
        //Segunda llamada ya con lat y lon para obtener current location de esa lat y lon
        const { data: clima } = await axios(urlClima)
        setResultado(clima)
    } catch (error) {
        setNoResultado("No hay resultados")
    } finally {
        setCargando(false)
    }
  }


  return (
    <ClimaContext.Provider 
        value={{
            busqueda,
            datosBusqueda,
            consultarClima,
            resultado,
            cargando,
            noResultado,
            setResultado
        }}
    >
        {children}
    </ClimaContext.Provider>
  )
}

export {
    ClimaProvider
}

export default ClimaContext