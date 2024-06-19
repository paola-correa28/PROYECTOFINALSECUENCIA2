import React from 'react';

const Busquedafactura = () => {
  const factura = [
    { numero: '234', nombre: 'juan' },
    { numero: '532', nombre: 'pedro' },
  ];

  return (
    <div className="w3-container w3-custom-color">
      <h2>Busqueda de facturas</h2>
      <ul className="w3-ul w3-border w3-white">
        {factura.map((factura, index) => (
          <li key={index} className="w3-padding-16 w3-custom-border">
            <span className="w3-large w3-custom-text">{factura.nombre}</span><br />
            <span>{factura.precio}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Busquedafactura;
