
import React, { useState } from 'react';

const Eliminarfactura = () => {
    const [formData, setFormData] = useState({
        idmovimiento:"",
        tipomovimiento:"",
        facturamov:"",
        total:"",
        totaliva:"",
        nombre:""
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
            <h1>eliminar factura</h1>
            <form id="bajafactura" onSubmit={handleSubmit}>
                
            <p>      
        <label htmlFor="idmovimiento">Id del movimiento:</label>
        <input type="number" 
        id="idmovimiento" 
        className="w3-input" 
        name="idmovimiento" 
        value={formData.idmovimiento} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="tipomovimiento">Forma de pago:</label>
        <input type="number" 
        id="tipomovimiento" 
        className="w3-input" 
        name="tipomovimiento" 
        value={formData.tipomovimiento} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="facturamov">Factura:</label>
        <input type="number" 
        id="facturamov" 
        className="w3-input" 
        name="facturamov" 
        value={formData.facturamov} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="total">total de pago:</label>
        <input type="number" 
        id="total" 
        className="w3-input" 
        name="total" 
        value={formData.total} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="totaliva">total del iva:</label>
        <input type="number" 
        id="totaliva" 
        className="w3-input" 
        name="totaliva" 
        value={formData.totaliva} 
        onChange={handleChange} required/>
        </p><p>

        <label htmlFor="nombre">Nombre de la empresa o persona:</label>
        <input type="text" 
        id="nombre" 
        className="w3-input" 
        name="nombre" 
        value={formData.nombre} 
        onChange={handleChange} required/>
        </p>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default Eliminarfactura;
