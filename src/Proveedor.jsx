import { useState } from "react"
export const Proveedor = () => {
    const [formState,SetFormState]=useState({
        id:"",
        nombre:"",
        volumen:"",
        formadepago:"",
        correo:"",
        producto:"",
        costo:""

    })
    const {nombre, volumen, formadepago, correo, producto, costo}=formState
    const onInputChange=({target})=>{
        const {nombre, value}=target
        SetFormState({...formState,[nombre]:value})
        // console.log(target.name,"=",target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault()
        console.log(formState)
    }
  return (
    <div>
            <h1>RegistroProveedores</h1>
            <form id="Proveedor" onSubmit={onSubmit}>
        <p>      
        <label htmlFor="id">Id del Proveedor:</label>
        <input type="number" 
        id="id" 
        className="w3-input" 
        name="id" 
        value={formData.id} 
        onChange={(event)=>{onInputChange(event)}} required/>
        </p><p>

        <label htmlFor="nombre">Nombre del proveedor:</label>
        <input type="text" 
        id="nombre" 
        className="w3-input" 
        name="nombre" 
        value={formData.nombre} 
        onChange={onInputChange} required/>
        </p><p>

        <label htmlFor="volumen">Volumen del producto:</label>
        <input type="number" 
        id="volumen" 
        className="w3-input" 
        name="volumen" 
        value={formData.volumen} 
        onChange={onInputChange} required/>
        </p><p>

        <label htmlFor="formadepago">Forma de pago:</label>
        <input type="text" 
        id="formadepago" 
        className="w3-input" 
        name="formadepago" 
        value={formData.formadepago} 
        onChange={onInputChange} required/>
        </p><p>

        <label htmlFor="correo">correo:</label>
        <input type="email" 
        id="correo" 
        className="w3-input" 
        name="correo" 
        value={formData.correo} 
        onChange={onInputChange} required/>
        </p><p>

        <label htmlFor="producto">Nombre del producto:</label>
        <input type="text" 
        id="producto" 
        className="w3-input" 
        name="producto" 
        value={formData.producto} 
        onChange={onInputChange} required/>
        </p><p>

        <label htmlFor="costo">costo:</label>
        <input type="number" 
        id="costo" 
        className="w3-input" 
        name="costo" 
        value={formData.costo} 
        onChange={onInputChange} required/>
        </p>
                <button type="submit">Guardar</button>
            </form>
        </div>
    
  )
}
fetch('Proveedor.php')
.then(response=>response.json())
.then((datos)=>{
    console.log("datos=",datos.data)
})
.catch(err=>{
    console.log(err)
})
export default Proveedor;
