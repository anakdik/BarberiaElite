import React from "react";
import "./Profesionales.css";
import fondoProfesionales from "../../assets/imagenes/fondoAzul5.jpg";
import barbe1 from "../../assets/imagenes/barbe1.jpg";
import barbe2 from "../../assets/imagenes/barbe2.jpg";
import barbe3 from "../../assets/imagenes/barbe3.jpg";
import { Link } from "react-router-dom";

const Profesionales = () => {
  return (
    <div className="body-profesionales">
    <div
      className="profesionales-contenedor"
      style={{
        backgroundImage: `url(${fondoProfesionales})`,
        backgroundSize: "cover",
      }}
    >
      <h2 className="profesionales-titulo">NUESTRO EQUIPO</h2>
      <div className="profesionales-subtitulo">Selecciona al de preferencia</div>

      <div className="profesionales-cards">
        {/* Card 1 */}
        <div className="profesionales-card">
          <div className="profesionales-foto">
            <img src={barbe1} alt="Carlos Ramírez" />
          </div>
          <h3 className="profesionales-nombre">Carlos Ramírez</h3>
          <p className="profesionales-cargo">Barbero Senior</p>
          <p className="profesionales-descripcion">
            Especializado en cortes modernos y barbería clásica. Certificado en
            técnicas de fade y diseño de barba.
          </p>
        </div>

        {/* Card 2 */}
        <div className="profesionales-card">
          <div className="profesionales-foto profesionales-seleccionado">
            <img src={barbe2} alt="José Fernández" />
          </div>
          <h3 className="profesionales-nombre">José Fernández</h3>
          <p className="profesionales-cargo">Estilista y Colorista</p>
          <p className="profesionales-descripcion">
            Con formación en cortes de tendencia, técnicas de coloración y
            tratamientos internacionales. Asiste a eventos internacionales.
          </p>
        </div>

        {/* Card 3 */}
        <div className="profesionales-card">
          <div className="profesionales-foto">
            <img src={barbe3} alt="Pablo Martín" />
          </div>
          <h3 className="profesionales-nombre">Pablo Martín</h3>
          <p className="profesionales-cargo">Especialista en Barbas</p>
          <p className="profesionales-descripcion">
            Capacitado en diseño de barbas, cuidado de la piel masculina y
            técnicas de afeitado clásico con navaja.
          </p>
        </div>
      </div>

      {/* Botón siguiente */}
      <Link to="/pagos" className="profesionales-boton-siguiente">
        Siguiente
      </Link>
    </div>
    </div>
  );
};

export default Profesionales;
  