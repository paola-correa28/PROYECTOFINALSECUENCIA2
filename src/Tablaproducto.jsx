import React from "react";

const Tablaproducto = ({ Producto }) => {
  if (!Producto || Producto.length === 0) {
    return <p>no hay nada</p>;
  }

  return (
    <div>
      <h2>Tabla de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>proveedor</th>
            <th>cantidad</th>
            <th>marca</th>
            <th>caracteristica</th>
          </tr>
        </thead>
        <tbody>
          {Producto.map((Producto) => (
            <tr key={Producto.id}>
              <td>{Producto.id}</td>
              <td>{Producto.nombre}</td>
              <td>{Producto.proveedor}</td>
              <td>{Producto.cantidad}</td>
              <td>{Producto.marca}</td>
              <td>{Producto.caracteristica}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablaproducto;