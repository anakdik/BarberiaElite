import React from "react";
import "./CardsServicios.css";
import { Link } from "react-router-dom";

// Importación de imágenes
import corte from "../assets/imagenes/corteser.jpeg";
import corteybarba from "../assets/imagenes/corteybarbaser.jpg";
import depilacion from "../assets/imagenes/depilacionser.jpg";
import limpieza from "../assets/imagenes/limpiezafacialser.jpg";
import barba from "../assets/imagenes/barbaser.jpg";

const CardsServicios = () => {
  return (
    <main className="tarjetasCardsServicios">
      <h2 className="tituloCardsServicios">Selecciona un Servicio</h2>
      <section className="serviciosCardsServicios">
        <Link to="/corte" className="tarjetaCardsServicios">
          <div className="overlayCardsServicios">
            <h3>Corte</h3>
          </div>
          <img src={corte} alt="Corte de cabello" />
        </Link>

        <Link to="/corte-barba" className="tarjetaCardsServicios">
          <div className="overlayCardsServicios">
            <h3>Corte y Barba</h3>
          </div>
          <img src={corteybarba} alt="Corte y barba" />
        </Link>

        <Link to="/depilacion" className="tarjetaCardsServicios">
          <div className="overlayCardsServicios">
            <h3>Depilación</h3>
          </div>
          <img src={depilacion} alt="Depilación" />
        </Link>

        <Link to="/limpieza-facial" className="tarjetaCardsServicios">
          <div className="overlayCardsServicios">
            <h3>Limpieza Facial</h3>
          </div>
          <img src={limpieza} alt="Limpieza facial" />
        </Link>

        <Link to="/barba" className="tarjetaCardsServicios">
          <div className="overlayCardsServicios">
            <h3>Barba</h3>
          </div>
          <img src={barba} alt="Barba" />
        </Link>
      </section>
    </main>
  );
};

export default CardsServicios;
