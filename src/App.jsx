import { useState } from 'react'
import './App.css'
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import CargarProducto from './pages/CargarProducto';
import { ProveedorProductos } from './context/ProveedorProductos';
import EditarProducto from './pages/EditarProducto';
import Navegador from './components/Navegador';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProveedorProductos>
      <BrowserRouter>
      <Routes>
        <Route path= "/"  element={<Home></Home>}></Route>
        <Route path= "/productos" element= {<Productos></Productos>}></Route>
        <Route path= "/cargar" element={<CargarProducto></CargarProducto>}></Route>
        <Route path= "/editar/:id" element={<EditarProducto></EditarProducto>}></Route>
        <Route path= "/productos/:id" element={<Navegador></Navegador>}></Route>
      </Routes>
      </BrowserRouter>
      </ProveedorProductos>
    </>
  )
}

export default App
