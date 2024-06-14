import React from "react";

const Tablafactura = ({ Factura }) => {
  if (!Factura || Factura.length === 0) {
    return <p>no hay nada</p>;
  }

  return (
    <div>
      <h2>Tabla de Facturas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>tipo de movimiento</th>
            <th>factura</th>
            <th>total</th>
            <th>totaliva</th>
            <th>nombre</th>
          </tr>
        </thead>
        <tbody>
          {Factura.map((Factura) => (
            <tr key={Factura.idmovimiento}>
              <td>{Factura.idmovimiento}</td>
              <td>{Factura.tipomovimiento}</td>
              <td>{Factura.facturamov}</td>
              <td>{Factura.total}</td>
              <td>{Factura.totaliva}</td>
              <td>{Factura.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablafactura;