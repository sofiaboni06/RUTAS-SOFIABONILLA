// Importa el componente Link desde react-router-dom
// (aunque en este código no se está usando)
import { Link } from "react-router-dom"

// Define el componente funcional Navbar
function Navbar() {
    // Retorna el menú de navegación
  return (
    <nav>
        {/* Lista de enlaces de navegación */}
      <ul>
         {/* Enlace que dirige a la ruta principal "/" */}
        <li><a href="/">Home</a></li>
        {/* Enlace que dirige a la ruta "/about" */}
        <li><a href="/about">About</a></li>
        {/* Enlace que dirige a la ruta "/contact" */}
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
// Exporta el componente para poder usarlo en otros archivos
export default Navbar;