
import React, { useState } from 'react';

const Eliminarproducto = () => {
    const [formData, setFormData] = useState({
        idproducto:"",
        nombre:"",
        proveedor:"",
        cantidad:"",
        marca:"",
        caracteristica:""
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
            <h1>eliminar producto</h1>
            <form id="bajaproducto" onSubmit={handleSubmit}>
                
            <p>      
        <label htmlFor="idproducto">Id del producto:</label>
        <input type="number" 
        id="idproducto" 
        className="w3-input" 
        name="idproducto" 
        value={formData.idproducto} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="nombre">nombre del producto:</label>
        <input type="text" 
        id="nombre" 
        className="w3-input" 
        name="nombre" 
        value={formData.nombre} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="proveedor">proveedor:</label>
        <input type="text" 
        id="proveedor" 
        className="w3-input" 
        name="proveedor" 
        value={formData.proveedor} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="cantidad">stock:</label>
        <input type="number" 
        id="cantidad" 
        className="w3-input" 
        name="cantidad" 
        value={formData.cantidad} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="marca">marca:</label>
        <input type="text" 
        id="marca" 
        className="w3-input" 
        name="marca" 
        value={formData.marca} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="caracteristicas">caracteristicas del producto:</label>
        <input type="text" 
        id="caracteristicas" 
        className="w3-input" 
        name="caracteristicas" 
        value={formData.caracteristica} 
        onChange={handleChange} required/>
        </p>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default Eliminarproducto;
