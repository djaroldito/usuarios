import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteId,  getUsers } from '../redux/actions'
import { useEffect } from 'react'
import Swal from "sweetalert2";
import './Usuarios.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SearchBar from './SearchBar'
import Navbar from './Navbar'


const Usuarios = () => {

    const dispatch = useDispatch()
    const usuarios = useSelector((state)=>state.Filtered)

    useEffect(() => {
       if (usuarios.length === 0){
       dispatch(getUsers());}
      // dispatch(getNacionalidades())
      
    }, [dispatch, usuarios.length]);

    const handleDelete = (id, nombre)=>{
        dispatch(deleteId(id))
        dispatch(getUsers())
        Swal.fire(`Usuario ${nombre} Borrado`);
        dispatch(getUsers())

    }


  return (

  


    <div className='main3' >
      {/* <Navbar /> */}
      <SearchBar />
   
      
      {
      usuarios.map(el=> ( 
        <div className="card w-25 m-2 mt-2 mb-2 d-inline-block" style={{ width: "200px", height: "200px" }}key={el.id}>
          <>

            
            
          <ul className="list-group list-group-flush">
             {/* <Card.Title >Nombre: {el.nombre}</Card.Title>
             <Card.Title>Apellido: {el.apellido}</Card.Title> */}
              <li className="list-group-item"><strong>Nombre:</strong> {el.nombre}</li>
          <li className="list-group-item"><strong>Apellido:</strong> {el.apellido}</li>
           <div className="d-flex flex-column">
           <Link className="btn btn-secondary mb-2" to={`/userDetail/${el.id}`}>Detalles</Link>
           <Button variant="danger" onClick={()=>{handleDelete(el.id, el.nombre)}} className="btn-block">Eliminar</Button>
            
           </div> 
             </ul> 
             </>  
        </div>

        

      )
      
      )
      }

    
    </div>
  )
}

export default Usuarios
