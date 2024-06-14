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
          <Route path="/*" element={<Navigate to='/' />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
