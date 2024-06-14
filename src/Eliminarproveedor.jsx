
import React, { useState } from 'react';

const Eliminarproveedor = () => {
    const [formData, setFormData] = useState({
        id:"",
        nombre:"",
        volumen:"",
        formadepago:"",
        correo:"",
        producto:"",
        costo:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('datos:', formData);
    };

    return (
        <div>
            <h1>eliminar proveedor</h1>
            <form id="bajaproveedor" onSubmit={handleSubmit}>
                
            <p>      
        <label htmlFor="id">Id del Proveedor:</label>
        <input type="number" 
        id="id" 
        className="w3-input" 
        name="id" 
        value={formData.id} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="nombre">Nombre del proveedor:</label>
        <input type="text" 
        id="nombre" 
        className="w3-input" 
        name="nombre" 
        value={formData.nombre} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="volumen">Volumen del producto:</label>
        <input type="number" 
        id="volumen" 
        className="w3-input" 
        name="volumen" 
        value={formData.volumen} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="formadepago">Forma de pago:</label>
        <input type="text" 
        id="formadepago" 
        className="w3-input" 
        name="formadepago" 
        value={formData.formadepago} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="correo">correo:</label>
        <input type="email" 
        id="correo" 
        className="w3-input" 
        name="correo" 
        value={formData.correo} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="producto">Nombre del producto:</label>
        <input type="text" 
        id="producto" 
        className="w3-input" 
        name="producto" 
        value={formData.producto} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="costo">costo:</label>
        <input type="number" 
        id="costo" 
        className="w3-input" 
        name="costo" 
        value={formData.costo} 
        onChange={handleChange} required/>
        </p>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default Eliminarproveedor;
