import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href='/'>Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href='/usuarios'>Usuarios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href='/formu'>Formulario</a>
      </li>
    </ul>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar


