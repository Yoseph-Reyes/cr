import { useEffect } from "react"
function Paciente({paciente, setPaciente, eliminarPaciente}) {

  const {nombre,propietario,email,fecha,sintomas,id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Eliminar?')
    if (respuesta) {
      eliminarPaciente(id)
    }
  }

  return (

    <div className=' mx-5 my-10 bg-white px-5 py-10 rounded-xl shadow-sm'>
        
      <p className=' font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
        <span className='font-normal normal-case'> {nombre}</span>
      </p>
      <p className=' font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
          <span className='font-normal normal-case'> {propietario}</span>
      </p>
      <p className=' font-bold mb-3 text-gray-700 uppercase'>Email: {''}
          <span className='font-normal normal-case'> {email}</span>
        </p>
        <p className=' font-bold mb-3 text-gray-700 uppercase'>fecha Alta: {''}
          <span className='font-normal normal-case'> {fecha}</span>
        </p>
        <p className=' font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
          <span className='font-normal normal-case'> {sintomas}</span>
        </p>
        <div className=" flex justify-between mt-2">
          <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
                  onClick={() => setPaciente(paciente) }>
            Editar
          </button>
          <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg" onClick={() => handleEliminar()}>
            Eliminar
          </button>
        </div>
      </div>
  )
}

export default Paciente