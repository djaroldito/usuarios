import React from 'react'
import { getByName } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'



const SearchBar = () => {

const dispatch = useDispatch()

const [input, setInput] = useState({
    nombre:''
})

const handleChange = (e)=>{
    setInput({[e.target.name]:e.target.value})

}


const handleClick = (e)=>{
    e.preventDefault()
    dispatch(getByName(input.nombre))
    setInput({
        nombre:''
    })

}

  // return (
  //   <div>
  //     <input placeholder='Ingrese Nombre' type='text' value={input.nombre} name='nombre' onChange={handleChange}></input>
  //     <button  onClick={handleClick} type='submit'>Buscar por nombre</button>
  //   </div>
  // )

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <a className="navbar-brand" href="#">
        Mi Logo
      </a> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/usuarios">
              Usuarios
            </a>
          </li>
          {/* Aquí se encuentra el componente de barra de búsqueda */}
          <li className="nav-item">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Ingrese Nombre"
                aria-label="Buscar"
                onChange={handleChange}
                value={input.nombre}
                name='nombre'
              />
              {/* <br/> */}
              <button 
                className="btn btn-outline-success mt-2  "
                type="submit"
                onClick={handleClick}
              >
                Buscar
              </button>
            </form>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/formu">
              Formulario
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

}

export default SearchBar
