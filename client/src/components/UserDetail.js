import {React, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getUserById } from '../redux/actions'
import './UserDetail.css'
import Navbar from './Navbar'
import SearchBar from './SearchBar'


const UserDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const usuarios = useSelector(state=>state.UserDetail) 

    useEffect(()=>{
        // dispatch(getNacionalidades())
        dispatch(getUserById(id))
    }, [dispatch, id])
  return (
    <div  >
      <SearchBar />
        
      {/* <div className='card pd-2'>
      <h3  className='p' > Datos del Usuario</h3>
       <h4  className='p'>Nombre: {usuarios.nombre}</h4>            
       <h4  className='p'>Apellido: {usuarios.apellido}</h4>    
       <p className='p'><b>Edad: </b>{usuarios.edad}</p>             
       <p className='p'><b>Email: </b>{usuarios.email}</p>
       <p className='p'><b>Dni: </b>{usuarios.dni}</p>
       <p className='p'><b>Genero: </b>{usuarios.genero}</p>
       <p className='p'><b>Provincia: </b>{usuarios.provincias?.map(el=>el.nombre).join(', ')}</p>
       <p><b>Ciudad: </b>{usuarios.ciudades?.map(el=>el.nombre).join(', ')}</p> 
      <Link to={'/usuarios'}>Volver</Link>
     
     
       </div> */}

<div className="card pd-2">
        <h4 className="card-title">Datos de Usuario</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Nombre:</strong> {usuarios.nombre}</li>
          <li className="list-group-item"><strong>Apellido:</strong> {usuarios.apellido}</li>
          <li className="list-group-item"><strong>Edad:</strong> {usuarios.edad}</li>
          <li className="list-group-item"><strong>Email:</strong> {usuarios.email}</li>
          <li className="list-group-item"><strong>Dni:</strong> {usuarios.dni}</li>
          <li className="list-group-item"><strong>Genero:</strong> {usuarios.genero}</li>
          <li className="list-group-item"><strong>Provincia:</strong> {usuarios.provincias?.map(el=>el.nombre).join(', ')}</li>
          <li className="list-group-item"><strong>Ciudad:</strong> {usuarios.ciudades?.map(el=>el.nombre).join(', ')}</li>
          <Link to={'/usuarios'}>Volver</Link>
        </ul>
      </div>


    </div>
  )
}

export default UserDetail
