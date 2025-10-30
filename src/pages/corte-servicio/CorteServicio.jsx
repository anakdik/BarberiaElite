import React from "react";
import "./CorteServicio.css";
import { Link } from "react-router-dom";

// Importar imágenes desde src
import logo from "../../assets/imagenes/logo.jpeg";
import fondo from "../../assets/imagenes/fondo2.jpg";
import valor from "../../assets/imagenes/valor.png";
import tiempo from "../../assets/imagenes/tiempo.png";
import mapa from "../../assets/imagenes/mapa.png";
import calendario from "../../assets/imagenes/calendario.png";

const CorteServicio = () => {
  return (
    <div className="servicios">
      {/* Fondo de imagen */}
      <img src={fondo} alt="Fondo" className="fondo" />

      {/* Header flotante */}
      <header className="header-flotante">
        <nav className="nav-bar">
          <Link className="titulo1" to="/">Inicio</Link>
          <a className="titulo1" href="#servicios">Servicios</a>
          <a className="titulo1" href="#contacto">Contáctenos</a>
        </nav>
      </header>

      {/* Contenedor principal */}
      <div className="overlay">
        <div className="contenedor-servicio">
          {/* Columna izquierda */}
          <div className="servicio-info">
            <div className="logo-principal">
              <img src={logo} alt="Logo Barbería Elite" />
            </div>
            <h2>Corte</h2>
            <p>
              Lavar, recortar y dar forma al cabello según el estilo deseado.
            </p>
            <hr />
            <div className="item">
              <img src={valor} alt="Valor" />
              <span><b>Valor del servicio:</b> 25.000 pesos</span>
            </div>
            <div className="item">
              <img src={tiempo} alt="Duración" />
              <span><b>Duración:</b> 1 hora</span>
            </div>
            <div className="item">
              <img src={mapa} alt="Dirección" />
              <span><b>Dirección:</b> Cl. 54 #82-57, Medellín</span>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="calendario">
            <img src={calendario} alt="Calendario" />
          </div>
        </div>
      </div>

      {/* Botón siguiente */}
      <Link to="/seleccionar-hora" className="boton-siguiente">
        Siguiente
      </Link>
    </div>
  );
};

export default CorteServicio;
