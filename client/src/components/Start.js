import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
            <label>ESTO ES START</label>
            <br/>
         <button> <Link to={'/home'}>Home</Link></button>

   
         
    </div>
  )
}

export default Start
