import React from "react";
import "./Pagos.css";
import fondoPagos from "../../assets/imagenes/fondoAzul6.jpg";
import logo from "../../assets/imagenes/logo.jpeg";
import tiempo from "../../assets/imagenes/tiempo.png";
import direccion from "../../assets/imagenes/direccion.png";
import valor from "../../assets/imagenes/valor.png";

const Pagos = () => {
  return (
    <div className="home-pagos">
    <div
      className="pagos-contenedor"
      style={{
        backgroundImage: `url(${fondoPagos})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      {/* Logo principal */}
      <div className="pagos-logo-principal">
        <img src={logo} alt="Barbería Elite" />
      </div>

      <h3 className="pagos-titulo-principal">Pago en Línea</h3>

      <div className="pagos-tarjetas">
        {/* Columna Izquierda */}
        <div className="pagos-tarjeta">
          <div className="pagos-icono-texto">
            <img src={tiempo} alt="Hora" />
            <p>
              <strong>1 h</strong>
              <br />
              9:00 am - 10:00 am
              <br />
              viernes 4 de julio de 2025
            </p>
          </div>

          <div className="pagos-icono-texto">
            <img src={direccion} alt="Ubicación" />
            <p>
              Cl. 54 #82-57,
              <br />
              Medellín
            </p>
          </div>

          <div className="pagos-icono-texto">
            <img src={valor} alt="Precio" />
            <p>$15.000</p>
          </div>

          <h3 className="pagos-subtitulo">Servicio</h3>
          <hr className="pagos-linea" />
          <p>Depilación Con Cera</p>
        </div>

        {/* Columna Central */}
        <div className="pagos-tarjeta">
          <p>
            <strong>Introduzca los detalles</strong>
          </p>
          <div className="pagos-campo">Jesus Alberto</div>
          <div className="pagos-campo">jesus@gmail.com</div>
          <div className="pagos-campo">1033257188</div>
          <div className="pagos-campo">3015460978</div>
        </div>

        {/* Columna Derecha */}
        <div className="pagos-tarjeta">
          <h3 className="pagos-subtitulo">Medios de Pago</h3>
          <div className="pagos-campo">$15.000</div>
          <div className="pagos-campo">4 de julio de 2025</div>
          <div className="pagos-campo">8:59 am</div>
          <div className="pagos-campo">Pago Exitoso!</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Pagos;
