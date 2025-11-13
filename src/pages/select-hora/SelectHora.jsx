import React from "react";
import "./SelectHora.css";
import logo from "../../assets/imagenes/logo.jpeg";
import fondo from "../../assets/imagenes/fondo6.jpg";

const SelectHora = () => {
  return (
    <div
      className="fondoSelectHora"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-selectHora">
        {/* Logo */}
        <div className="logo-selectHora">
          <img src={logo} alt="Barbería Elite" />
        </div>

        {/* Encabezado */}
        <header className="header-selectHora">
          <h2 className="dia-selectHora">VIERNES</h2>
          <h3 className="fecha-selectHora">4 de Julio</h3>
        </header>

        {/* Título de selección */}
        <div className="titulo-selectHora">Seleccione una hora</div>

        {/* Lista de horas */}
        <main className="main-selectHora">
          <div className="fila-selectHora">
            <span className="hora-selectHora">9:00 AM</span>
            <a href="#" className="btn-selectHora">Seleccionar</a>
          </div>
          <div className="fila-selectHora">
            <span className="hora-selectHora">11:00 AM</span>
            <a href="#" className="btn-selectHora">Seleccionar</a>
          </div>
          <div className="fila-selectHora">
            <span className="hora-selectHora">13:00 PM</span>
            <a href="#" className="btn-selectHora">Seleccionar</a>
          </div>
          <div className="fila-selectHora">
            <span className="hora-selectHora">16:00 PM</span>
            <a href="#" className="btn-selectHora">Seleccionar</a>
          </div>
          <div className="fila-selectHora">
            <span className="hora-selectHora">18:00 PM</span>
            <a href="#" className="btn-selectHora">Seleccionar</a>
          </div>
        </main>
      </div>

      <a href="/profesionales" className="boton-siguiente-selectHora">
        Siguiente
      </a>


    
      
    </div>
  );
};

export default SelectHora;
