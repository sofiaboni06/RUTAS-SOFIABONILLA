import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'// Importa los estilos del componente
import {BrowserRouter,Routes, Route} from 'react-router-dom'// Importa los componentes necesarios para manejar rutas en la aplicación
import Home from './Home' // Importa los componentes que se mostrarán según la ruta
import About from './About'
import Contact from './Contact'
// Importa el componente de navegación
import Navbar from './Navbar'
// Componente principal de la aplicación
function App() {
  
// Retorna la estructura principal de la app
  return (
    <div>
        {/* BrowserRouter permite que la aplicación maneje navegación sin recargar la página */}
      <BrowserRouter>
          {/* Navbar se mostrará siempre, sin importar la ruta */}
        <Navbar />
          {/* Routes define las rutas de la aplicación y qué componente mostrar para cada ruta */}{/* Routes contiene todas las rutas disponibles */}
        <Routes>
           {/* Cuando la ruta sea "/" se mostrará el componente Home */}
          <Route path="/" element={<Home />} />
          {/* Cuando la ruta sea "/about" se mostrará el componente About */}
          <Route path="/about" element={<About />} />
           {/* Cuando la ruta sea "/contact" se mostrará el componente Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
// Exporta el componente App para poder usarlo en otros archivos
export default App
