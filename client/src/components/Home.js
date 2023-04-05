import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCiudades, getProvincias, getUsers } from './../redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const Home = () => {
    const dispatch = useDispatch()
    const Provincias = useSelector(state => state.Provincias)
    const Ciudades = useSelector(state => state.Provincias)
    const usuarios = useSelector((state)=>state.Filtered)

    

    useEffect(() => {
      dispatch(getUsers());
      if (Provincias.length === 0 && Ciudades.length === 0 ){
      dispatch(getProvincias())
      dispatch(getCiudades())  

      }
    }, [Ciudades.length, Provincias.length, dispatch]);
  
  
  //   return (
  //   <div className='main1' >
     
  //     <SearchBar />
  //   </div>
  // )

  return (
    <div>
      {/* Barra de navegación */}
      {/* Aquí puedes agregar el código de tu navbar existente */}

      {/* Contenido de la landing page */}
      <SearchBar />
     
      <section className="container mt-11">
        <h1 className="text-center mt-5">Sistema Web de Administración de Usuarios</h1>
        <p className="text-center">Bienvenido a nuestro sistema de administración de usuarios. Aquí puedes gestionar y controlar
          todos los usuarios registrados en tu plataforma.</p>
        <div className="row mt-5">
          <div className="col-md-4">
            <h3 className="text-center">Gestión de Usuarios</h3>
            <p>Administra de manera fácil y rápida los usuarios registrados en tu plataforma. Agrega, modifica y elimina usuarios con
              unos pocos clics.</p>
          </div>
          <div className="col-md-4">
            <h3 className="text-center">Panel de Control</h3>
            <p>Accede a un completo panel de control donde podrás ver estadísticas, gráficos y datos relevantes sobre los usuarios
              registrados en tu plataforma.</p>
          </div>
          <div className="col-md-4">
            <h3 className="text-center">Seguridad y Privacidad</h3>
            <p>Nuestro sistema de administración de usuarios cuenta con robustas medidas de seguridad y privacidad para garantizar la
              protección de los datos de tus usuarios.</p>
          </div>
        </div>
      </section>

      {/* Otros elementos de la landing page, como secciones adicionales, formularios de registro, etc. */}
    </div>
  );
}

export default Home
