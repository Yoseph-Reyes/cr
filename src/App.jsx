import { useState, useEffect } from "react"
import Header from "./components/header"
import Formulario from "./components/formulario"
import Listado from "./components/Listado"

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente,setPaciente] = useState({});

  useEffect( () => {
    const obtenerLS = () => {
      const pacienteLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      console.log(pacienteLS)
    }
    obtenerLS()
  },[]) 


   useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = (id) => {
    const pacientesAct = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesAct)
  }

  return (
    <div className="container mx-2 mt-10">
       <Header />
       <div className=" mt-12 md:flex">
        <Formulario 
           pacientes = {pacientes}
           setPacientes = {setPacientes}   
           paciente = {paciente}   
           setPaciente = {setPaciente}    
           />
        <Listado 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
       </div>
    </div>
  )
}

export default App
