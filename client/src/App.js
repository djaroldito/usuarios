import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import Start from './components/Start';
import Formu from './components/Formu';
import Usuarios from './components/Usuarios';
import UserDetail from './components/UserDetail'

function App() {
  return (
    <BrowserRouter>
   <Routes>
    {/* <Route exact path='/' element = {<Start />} /> */}
    <Route exact path ='/' element = {<Home />} />
    <Route exact path='/formu' element = {<Formu />} />
    <Route exact path='/usuarios' element ={<Usuarios />} />
    <Route exact path='/userDetail/:id' element={<UserDetail />} />
   </Routes>
    </BrowserRouter>
  );
}

export default App;
