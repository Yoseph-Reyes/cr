import {useState, useEffect} from 'react'
import Error from '../components/Error.jsx'
function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

  const [nombre,setNombre] = useState('');
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [fecha,setFecha] = useState('');
  const [sintomas,setSintomas] = useState('');

  const [error,setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
          setNombre(paciente.nombre)
          setPropietario(paciente.propietario)
          setEmail(paciente.email)
          setFecha(paciente.fecha)
          setSintomas(paciente.sintomas)
      } 
  },[paciente])


  const genID = () => {
    const date = Date.now().toString(36)
    const random = Math.random().toString(36).substr(2)
    return date + random
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if( [nombre,propietario,email,fecha,sintomas].includes('')) {
      console.log('hay un campo vacio')
      setError(true)
      return;
    } 
    setError(false)


    const objPaciente = {
      nombre, propietario,email,fecha,sintomas
    }
    if (paciente.id) {
      objPaciente.id = paciente.id

      const pacienteAct = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState )

      setPacientes(pacienteAct)
      setPaciente({})

    } else {

      objPaciente.id = genID()
      setPacientes([...pacientes,objPaciente])
    }
    

    
    // reiniciar formulario

    setNombre('');
    setError('');
    setEmail('');
    setPropietario('');
    setSintomas('');

  }


  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
  <h2 className='font-black text3xl text-center'>Seguimiento Paciente</h2>
  <p className='text-lg mt-5 text-center'>
    Añade Pacientes y {''}
    <span className='text-indigo-600 font-bold text-lg'> Administralos</span>
  </p>
  <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
        onSubmit={handleSubmit}>
          {error && <Error><p>Todos los datos son Obligatorios </p></Error> }
    <div className='mb-5'>
      <label htmlFor='mascota' className='block text-gray-700 mb-1'>Nombre Mascota {nombre}</label>
      <input id="mascota" type="text" placeholder='Nombre de la Mascota'
        className=' border-2 w-full placeholder-gray-400 rounded-md' value={nombre} onChange={ (e) => setNombre(e.target.value)} />
    </div>
    <div className='mb-5'>
      <label htmlFor='propietario' className='block text-gray-700 mb-1'>Nombre Propietario</label>
      <input id="propietario" type="text" placeholder='Nombre del Propietario'
        className=' border-2 w-full placeholder-gray-400 rounded-md' value={propietario} onChange={ (e) => setPropietario(e.target.value)}/>
    </div>
    <div className='mb-5'>
      <label htmlFor='email' className='block text-gray-700 mb-1'>Email</label>
      <input id="email" type="email" placeholder='email contacto'
        className=' border-2 w-full placeholder-gray-400 rounded-md' value={email} onChange={ (e) => setEmail(e.target.value)}/>
    </div>
    <div className='mb-5'>
      <label htmlFor='alta' className='block text-gray-700 mb-1'>Alta</label>
      <input id="alta" type="date" placeholder='email contacto'
        className=' border-2 w-full placeholder-gray-400 rounded-md' value={fecha} onChange={ (e) => setFecha(e.target.value)}/>
    </div>
    <div className='mb-5'>
      <label htmlFor='sintomas' className='block text-gray-700 mb-1'>Sintomas</label>
      <textarea name="sintomas" id="sintomas" placeholder='Describe los Sintomas del paciente' cols="20" rows="5"
        className=' border-2 w-full placeholder-gray-400 rounded-md' value={sintomas} onChange={ (e) => setSintomas(e.target.value)}></textarea>
    </div>
    <input type="submit"
      className='bg-indigo-600 w-full text-white rounded-md p-3 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
      value={ paciente.id ? 'Editar Paciente' : 'Añadir Paciente' } />
  </form>
</div>
  )
}

export default Formulario