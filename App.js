import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Portada from "./components/Portada";
import DatosPersonales from "./components/DatosPersonales";
import CursosActuales from "./components/CursosActuales";
import LogrosAcademicos from "./components/LogrosAcademicos";

function App() {
  return (
    <Router>
      <div>
        {/* NAVBAR ÚNICA */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow">
          <Link className="navbar-brand fw-bold" to="/">Mi Portafolio</Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <Link className="nav-link" to="/sobre-mi">Sobre mí</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cursos">Cursos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logros">Logros</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* CONTENIDO DE CADA RUTA */}
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/sobre-mi" element={<DatosPersonales />} />
          <Route path="/cursos" element={<CursosActuales />} />
          <Route path="/logros" element={<LogrosAcademicos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;