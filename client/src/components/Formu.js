import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios'
import { getCiudades, getProvincias } from './../redux/actions';
//import './Formu.css'
import './Formu.css'
//import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import SearchBar from './SearchBar';

const Formu = () => {
  let ciudades1 = []
  const dispatch = useDispatch()
  
  const Provincias = useSelector(state => state.Provincias)
  let Ciudades = useSelector(state => state.Ciudades)
  const Generos = useSelector(state => state.Generos)

  
  //const [input, setCiudades1] = useState({''});
  const [input, setInput] = useState({
    nombre:'',
    apellido:'',
    edad:'',
    email:'',
    genero: [],
    dni:'',
    ciudades:[],
    provincias:[],
  })

  const inputF = {
    nombre: input.nombre,
    apellido: input.apellido,
    edad: input.edad,
    email: input.email,
    genero:input.genero,
    dni: input.dni,
    ciudades: input.ciudades,
    provincias: input.provincias
  }
 
  useEffect(() => {
    if(Provincias.length === 0){
    dispatch(getCiudades())
    dispatch(getProvincias())}
  }, [Provincias.length, dispatch]);



function z (val){
  ciudades1 = Ciudades.filter(el=>el.idProv === val)
  return ciudades1
}

const handleChange = (e) => {
  setInput({...input,[e.target.name]:e.target.value})
}

const handleGenero = (e)=>{
  setInput({...input,[e.target.name]:e.target.value})
 // e.target.value = 'default'
}

const handleProvincias = (e)=>{
  setInput({...input,[e.target.name]:e.target.value})
   console.log(input.provincias)
 // e.target.value = 'default'
}

const handleCiudades = (e)=>{
  setInput({...input,[e.target.name]:e.target.value})
 // e.target.value = 'default'
}

// const handleNacionalidad = (e) => {
//   if (!input.nacionalidad.includes(Nacionalidades.find( item => item.id === e.target.value))) {
//       input.nacionalidad.push(Nacionalidades.find( item => item.id === e.target.value))
//       }
//      setInput({
//       ...input,
//       nacionalidad: [...input.nacionalidad],
//     });
//     e.target.value = 'default'
//      }
    
const handleSubmit = (e) => {
  e.preventDefault()
  if(input.nombre && input.apellido && input.edad && input.email){
  axios.post("/allUsers", inputF);
  // console.log(input)
  // console.log(inputF)

      setInput({
    nombre:'',
    apellido:'',
    edad:'',
    email:'',
    genero: e.label,
    dni:'',
    //nacionalidad: []
   })
    Swal.fire("Usuario Creado");
    
 
}
  else{
    Swal.fire("Faltan Datos");
  }
}

// function handleDelete(name) {
//   setInput({
//     ...input,
//     nacionalidad: input.nacionalidad.filter(item => item.name !== name)
//   })
// }
  return (
    < >
    <section className='main' >
      <SearchBar />
      <div className='form'>
      <form  onSubmit={(e) =>handleSubmit(e)}>
      <label className='labelI'>INGRESE DATOS</label>
      <br/>
      <br/>
      {/* <br/> */}
      
      <div >
      <label className='label' >Nombre: </label>
      <input className='imputs' value={input.nombre}  name='nombre' placeholder='Ingrese Nombre' type={'text'} onChange={handleChange}></input>
      {/* <br/> */}
      
      <label className='label' >Apellido: </label>
      <input className='imputs' value={input.apellido}  name='apellido' placeholder='Ingrese Apellido'  type={'text'} onChange={handleChange}></input>
      </div>  

      {/* <br/> */}
      <div >
      <label className='label' >DNI: </label>
      <input className='imputs' value={input.dni}  name='dni' placeholder='Ingrese D.N.I'  type={'DNI'} onChange={handleChange}></input>
      {/* <br/> */}
      
      <label className='label'>Edad: </label>
      <input className='imputs' value={input.edad}  name='edad' placeholder='ingrese edad' type={'number'} onChange={handleChange}></input>
      
      </div>
      {/* <br/> */}
      <div >
      <label className='label' >Email: </label>
      <input className='imputs' value={input.email} name='email' placeholder='Ingrese E-mail' type={'email'} onChange={handleChange}></input>
      
      {/* <br/> */}
           <label className='label' >Genero: </label>   
            <select className='imputs' name="genero" onChange={handleGenero}>
              <option  value="default">Choose</option>
              {Generos?.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
               </select>
               
               
               </div> 

               {/* <br/> */}
      <label className='label'>Provincia: </label> 
            <select className='imputs'  name="provincias" onChange={handleProvincias}>
              <option  value="default">Choose</option>
                 { Provincias?.map((item) => (
                   <option value={item.id} key={item.id} >
                  {item.nombre}
                </option>
              ))}
               </select>  
              
               {/* <br/> */}

              <label className='label'>Ciudad: </label> 
                    <select className='imputs' name="ciudades" onClick={z(input.provincias)} onChange={handleCiudades}>
                      <option  value="default">Choose</option>
                         { ciudades1?.map((item) =>  (
                        <option value={item.id} key={item.id} >
                          {item.nombre }
                        </option>
                      ))}
                       </select>  
        
                       {/* <br/> */}
                       
    </form>
     {/* <div class="d-flex justify-content-left">
        {input.provincias?.map((item) => (<div   class="p-2"  key={item.id}>{item.nombre} <button onClick={() => handleDelete(item.name)}>x</button></div>))}
      </div> */}

     </div>

     <div>
      <button className='button'  onClick={handleSubmit}>Submit</button>
      </div>
      <br/>
   
    
      </section>
    </>
    
    
  )
}

export default Formu
