import "../App.css"
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navegador from "../components/Navegador";
import { ProductosContext } from '../context/ProveedorProductos';

const Home = () =>{

    const { productos } = useContext(ProductosContext);
    const productosDestacados = productos.slice(0, 3);

    return (
        <>
        <Navegador></Navegador>
        <div className="hero">
                <h1>Bienvenid@ a Nuestra Tienda!</h1>
                <p>Encuentra los mejores productos al mejor precio.</p>
                <Link to="/productos" className="boton1 btn btn-success">Ver Productos</Link>
            </div>
            <br />
            <div className="productos-destacados">
                <h2>Productos Destacados</h2>
                <div className="contenedor">
                    {productosDestacados.map(producto => (
                        <div className="card" key={producto.id} style={{ width: '18rem' }}>
                            <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.precio}</p>
                                <button className="btn btn-primary">Comprar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home