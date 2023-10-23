import { ClimaProvider } from "./context/ClimaProvider"
//Destinamos AppClima como archivo principal para envolver el context en este archivo y no comprometer ni modificar en lo absoluto al main.jsx
import AppClima from "./components/AppClima"


function App() {
  
  return (
    <ClimaProvider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <AppClima />
    </ClimaProvider>
  )
}

export default App
