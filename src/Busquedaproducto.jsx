import React from 'react';

const Busquedaproducto = () => {
  const producto = [
    { nombre: 'alcohol', precio: '32' },
    { nombre: 'teclado', precio: '356' },
  ];

  return (
    <div className="w3-container w3-custom-color">
      <h2>Busqueda de Productos</h2>
      <ul className="w3-ul w3-border w3-white">
        {producto.map((producto, index) => (
          <li key={index} className="w3-padding-16 w3-custom-border">
            <span className="w3-large w3-custom-text">{producto.nombre}</span><br />
            <span>{producto.precio}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Busquedaproducto;
