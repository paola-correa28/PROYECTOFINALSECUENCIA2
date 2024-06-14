import React from "react";
import { useState } from 'react'
import {datos} from './helpers/getData.js'

export const Tablaproveedor = () => {
    const [data,setData]=useState(datos)
    const filtrar=()=>{
        const nvaData=data.filter(v=>{
            if(v.id>=0) return true
        })
        setData(nvaData)
    }
    const todos=()=>{
        setData(datos)
      }
    }
const Tablaproveedor = ({ Proveedor }) => {
  if (!Proveedor || Proveedor.length === 0) {
    return <p>no hay nada</p>;
  }

  return (
    <div>
      <h2>Tabla de proveedores</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>volumen</th>
            <th>forma de pago</th>
            <th>Correo</th>
            <th>producto</th>
            <th>costo</th>
          </tr>
        </thead>
        <tbody>
          {Proveedor.map((Proveedor) => (
            <tr key={Proveedor.id}>
              <td>{Proveedor.id}</td>
              <td>{Proveedor.nombre}</td>
              <td>{Proveedor.volumen}</td>
              <td>{Proveedor.formadepago}</td>
              <td>{Proveedor.correo}</td>
              <td>{Proveedor.producto}</td>
              <td>{Proveedor.costo}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <button onClick={filtrar}>Filtrar</button>
        <button onClick={todos}>todos</button>
    </div>
  );
};

export default Tablaproveedor;