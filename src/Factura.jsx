import { useState } from "react"

export const Factura = () => {
    const [formState,SetFormState]=useState({
        idmovimiento:"",
        tipomovimiento:"",
        facturamov:"",
        total:"",
        totaliva:"",
        nombre:""

    })
    const {idmovimiento, tipomovimiento, facturamov, total, totaliva, nombre}=formState
    const onInputChange=({target})=>{
        const {idmovimiento, value}=target
        SetFormState({...formState,[idmovimiento]:value})
        // console.log(target.name,"=",target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault()
        console.log(formState)
    }
  return (
    <div>
            <h1>RegistroFacturas</h1>
            <form id="Factura" onSubmit={onSubmit}>
        <p>      
        <label htmlFor="idmovimiento">Id del movimiento:</label>
        <input type="number" 
        id="idmovimiento" 
        className="w3-input" 
        name="idmovimiento" 
        value={formData.idmovimiento} 
        onChange={(event)=>{onInputChange(event)}} required/>
        </p><p>

        <label htmlFor="tipomovimiento">Forma de pago:</label>
        <input type="number" 
        id="tipomovimiento" 
        className="w3-input" 
        name="tipomovimiento" 
        value={formData.tipomovimiento} 
        onChange={onInputChange} required/>
        </p><p>

        <label htmlFor="facturamov">Factura:</label>
        <input type="number" 
        id="facturamov" 
        className="w3-input" 
        name="facturamov" 
        value={formData.facturamov} 
        onChange={onInputChange} required/>
        </p><p>

        <label htmlFor="total">total de pago:</label>
        <input type="number" 
        id="total" 
        className="w3-input" 
        name="total" 
        value={formData.total} 
        onChange={onInputChange} required/>
        </p><p>

        <label htmlFor="totaliva">total del iva:</label>
        <input type="number" 
        id="totaliva" 
        className="w3-input" 
        name="totaliva" 
        value={formData.totaliva} 
        onChange={onInputChange} required/>
        </p><p>

        <label htmlFor="nombre">Nombre de la empresa o persona:</label>
        <input type="text" 
        id="nombre" 
        className="w3-input" 
        name="nombre" 
        value={formData.nombre} 
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
export default Factura;