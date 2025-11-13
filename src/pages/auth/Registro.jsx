import React, { useState } from "react";
import "./Registro.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imagenes/logo.jpeg";
import fondoRegistro from "../../assets/imagenes/fondodegra3.jpg";

function Registro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    correo: "",
    contraseña: "",
    nombre: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar datos del usuario en localStorage
    localStorage.setItem("usuario", JSON.stringify(formData));

    alert("Registro exitoso ✅");
    navigate("/login");
  };

  return (
    <div
      className="registro-container"
      style={{
        backgroundImage: `url(${fondoRegistro})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="registro-logo">
        <img src={logo} alt="Barbería Elite" />
      </div>

      <form className="registro-box" onSubmit={handleSubmit}>
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <button type="submit" className="registro-button">
          Registrarme
        </button>
      </form>
    </div>
  );
}

export default Registro;
