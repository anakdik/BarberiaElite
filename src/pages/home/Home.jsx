import React from "react";
import "./Home.css";

// Importar imágenes
import loginImg from "../../assets/imagenes/login.png";
import logoImg from "../../assets/imagenes/logo.jpeg";
import ima1Img from "../../assets/imagenes/ima1.jpeg";
import instagram from "../../assets/imagenes/instagram.png";
import whatsapp from "../../assets/imagenes/whatsapp.png";
import facebook from "../../assets/imagenes/facebook.png";
import mapa from "../../assets/imagenes/mapa.png";

// Importar fondos nuevos
import fondoHomeArriba from "../../assets/imagenes/fondoindex1.jpg";
import fondoHomeAbajo from "../../assets/imagenes/fondoindex2.jpg";

import CardsServicios from "../../components/CardsServicios";

const Home = () => {
  return (
    <div
      className="home-contenedor"
      style={{
        "--fondoHomeArriba": `url(${fondoHomeArriba})`,
        "--fondoHomeAbajo": `url(${fondoHomeAbajo})`,
      }}
    >
      {/* Encabezado */}
      <header className="home-encabezado">
        <nav className="home-menu">
          <article>
            <img
              className="home-login"
              src={loginImg}
              alt="Icono de inicio de sesión"
            />
            <a className="home-titulo2" href="/login">
              Inicio sesión
            </a>
          </article>
        </nav>

        <section id="inicio" className="home-contenido">
          <div className="home-bloque-izquierdo">
            <img className="home-logo" src={logoImg} alt="Logo Barbería Elite" />
            <p className="home-texto">
              Bienvenidos a Barbería Elite, donde el estilo y la atención
              personalizada se encuentran.
            </p>
          </div>

          <div className="home-imagen-diagonal">
            <img src={ima1Img} alt="Barbero trabajando" />
          </div>
        </section>
      </header>

      {/* Sección de tarjetas */}
      <main className="home-seccion-servicios">
        <CardsServicios />
      </main>

      {/* Pie de página */}
      <footer className="home-pie-pagina">
        <div className="home-redes">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://wa.me/573001234567" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://maps.google.com/?q=Barbería+Elite"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mapa} alt="Google Maps" />
          </a>
        </div>
        <p>© 2025 Barbería Elite - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Home;
