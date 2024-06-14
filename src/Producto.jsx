import { useState } from "react"

export const Producto = () => {
    const [formState,SetFormState]=useState({
        idproducto:"",
        nombre:"",
        proveedor:"",
        cantidad:"",
        marca:"",
        caracteristica:""

    })
    const {idproducto, nombre, proveedor, cantidad, marca, caracteristica}=formState
    const onInputChange=({target})=>{
        const {name, value}=target
        SetFormState({...formState,[name]:value})
        // console.log(target.name,"=",target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault()
        console.log(formState)
    }
  return (
    <div>
            <h1>RegistroProductos</h1>
            <form id="Productos" onSubmit={onSubmit}>
        <p>      
        <label htmlFor="idproducto">Id del producto:</label>
        <input type="number" 
        id="idproducto" 
        className="w3-input" 
        name="idproducto" 
        value={formData.idproducto} 
        onChange={(event)=>{onInputChange(event)}} required/>
        </p><p>

        <label htmlFor="nombre">nombre del producto:</label>
        <input type="text" 
        id="nombre" 
        className="w3-input" 
        name="nombre" 
        value={formData.nombre} 
        onChange={onInputChange} required/>
        </p><p>

        <label htmlFor="proveedor">proveedor:</label>
        <input type="text" 
        id="proveedor" 
        className="w3-input" 
        name="proveedor" 
        value={formData.proveedor} 
        onChange={onInputChange} required/>
        </p><p>

        <label htmlFor="cantidad">stock:</label>
        <input type="number" 
        id="cantidad" 
        className="w3-input" 
        name="cantidad" 
        value={formData.cantidad} 
        onChange={onInputChange} required/>
        </p><p>

        <label htmlFor="marca">marca:</label>
        <input type="text" 
        id="marca" 
        className="w3-input" 
        name="marca" 
        value={formData.marca} 
        onChange={onInputChange} required/>
        </p><p>

        <label htmlFor="caracteristicas">caracteristicas del producto:</label>
        <input type="text" 
        id="caracteristicas" 
        className="w3-input" 
        name="caracteristicas" 
        value={formData.caracteristica} 
        onChange={onInputChange} required/>
        </p>
                <button type="submit">Guardar</button>
            </form>
        </div>
    
  )
}
fetch('getPartes.php')
.then(response=>response.json())
.then((datos)=>{
    console.log("items=",datos.data)
})
.catch(err=>{
    console.log(err)
})
export default Producto;