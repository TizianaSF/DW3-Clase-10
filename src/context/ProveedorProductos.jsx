import { createContext, useEffect, useState } from 'react';

const ProductosContext = createContext();

const ProveedorProductos = ({ children }) => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://664ca11e35bbda1098813511.mockapi.io/productos";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setProductos(res)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false);
      });
  }, []);

  // Función para agregar una nueva tarea
  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  // Función para eliminar una tarea
  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter((productos) => productos.id !== id);
    setProductos(nuevosProductos);
  };

  console.log(productos);

  return (
    <ProductosContext.Provider value={{ productos, agregarProducto, eliminarProducto, setProductos, url }}>
      {children}
    </ProductosContext.Provider>
  );
};

export { ProveedorProductos, ProductosContext };