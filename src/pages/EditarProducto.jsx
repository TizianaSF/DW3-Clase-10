import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navegador from '../components/Navegador';

const EditarProducto = () => {
    const [producto, setproducto] = useState({});
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [imagen, setImagen] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        // Llamar a la función para obtener los detalles del usuario
        fetchUserDetails();
    }, [id]);

    const fetchUserDetails = async () => {
        try {
            const response = await fetch(`https://664ca11e35bbda1098813511.mockapi.io/productos/${id}`);
            const data = await response.json();
            setproducto(data);
            setNombre(data.nombre);
            setPrecio(data.precio);
            setImagen(data.imagen)
        } catch (error) {
            console.error('Error en la solicitud: ', error);
        }
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`https://664ca11e35bbda1098813511.mockapi.io/productos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, precio, imagen }),
            });
            if (response.ok) {
                navigate(`/productos/${id}`);
            } else {
                console.error('Error al actualizar usuario');
            }
        } catch (error) {
            console.error('Error en la solicitud: ', error);
        }
    };
    
    return (
        <div>
            <Navegador/>
            <h1>Editar Usuario</h1>
            <div className="mb-3">
                <label>Nombre: </label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            
            <div className="mb-3">
                <label>Precio: </label>
                <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </div>

            <div className="mb-3">
                <label>Imagen (url): </label>
                <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
            </div>
            
            <button className="btn btn-primary" onClick={handleUpdate}>Actualizar</button>
        </div>
    );
};

export default EditarProducto;