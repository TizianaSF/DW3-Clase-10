import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Navegador from "../components/Navegador";
import { ProductosContext } from "../context/ProveedorProductos";
import '../App.css';
import { Link } from 'react-router-dom';
import EditarProducto from './EditarProducto';

const Productos = () => {

    const {productos, eliminarProducto, setProductos} = useContext(ProductosContext);
    const [productosSeleccionados, setproductosSeleccionados] = useState([]);
    const [productoSeleccionado, setproductoSeleccionado] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setproductosSeleccionados(productos.map(producto => producto.id));
    }, [productos]);

    const handleEliminarProducto = (id) => {
        
        fetch(`https://664bfe9435bbda10987ea2c9.mockapi.io/users/productos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                eliminarProducto(id);
            })
            .catch((error) => console.error(error.message));

    };



    const handleSeleccionarProducto = (id) => {
        setproductoSeleccionado(id);
    };

    return (
        <>
            <Navegador></Navegador>
            <h1 id="prod">Productos</h1>
            <div>

                {productos.length === 0 ? (
                    <p>Cargando...</p>
                ) : (
                    <div className="contenedor">
                        {
                        productos.map(producto => ( 
                            <>
                            <div className="card" key={producto.id} style={{ width: '18rem' }}>
                                <img src={producto.imagen} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">{producto.precio}</p>
                                    <button  className="btn btn-danger" onClick={() => handleEliminarProducto(producto.id)}>Eliminar</button>
                                    <button  className="btn btn-primary" onClick={() => handleSeleccionarProducto(producto.id)}>Seleccionar</button>
                                    <Link to={`/editar/${producto.id}`} className="btn btn-secondary">Editar</Link>
                                </div>
                            </div>
                            </>
                        ))}

                    </div>
                )}
            </div>
        </>
    );
}

export default Productos