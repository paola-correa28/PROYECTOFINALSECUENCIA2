import Busquedafactura from "./Busquedafactura"
import Busquedaproducto from "./Busquedaproducto"
import Busquedaproveedor from "./Busquedaproveedor"
import Cambiofactura from "./Cambiofactura"
import Cambioproducto from "./Cambioproducto"
import Cambioproveedor from "./Cambioproveedor"
import Eliminarfactura from "./Eliminarfactura"
import Eliminarproducto from "./Eliminarproducto"
import Eliminarproveedor from "./Eliminarproveedor"
import Factura from "./Factura"
import Producto from "./Producto"
import Proveedor from "./Proveedor"
import Tablafactura from "./Tablafactura"
import Tablaproducto from "./Tablaproducto"
import Tablaproveedor from "./Tablaproveedor"

function App() {

  return (
    <>
      <div className='w3-container'>
        <Menu />
        <Routes>
          <Route path="/Factura" element={<Factura/>}></Route>
          <Route path="/Producto" element={<Producto/>}></Route>
          <Route path="/Proveedor" element={<Proveedor/>}></Route>
          <Route path="/Tablafactura" element={<Tablafactura/>}></Route>
          <Route path="/Tablaproducto" element={<Tablaproducto/>}></Route>
          <Route path="/Tablaproveedor" element={<Tablaproveedor/>}></Route>
          <Route path="/Eliminarfactura" element={<Eliminarfactura/>}></Route>
          <Route path="/Eliminarproducto" element={<Eliminarproducto/>}></Route>
          <Route path="/Eliminarproveedor" element={<Eliminarproveedor/>}></Route>
          <Route path="/Cambioproveedor" element={<Cambioproveedor/>}></Route>
          <Route path="/Cambioproducto" element={<Cambioproducto/>}></Route>
          <Route path="/Cambiofactura" element={<Cambiofactura/>}></Route>
          <Route path="/Busquedafactura" element={<Busquedafactura/>}></Route>
          <Route path="/Busquedaproducto" element={<Busquedaproducto/>}></Route>
          <Route path="/Busquedaproveedor" element={<Busquedaproveedor/>}></Route>
          <Route path="/*" element={<Navigate to='/' />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
