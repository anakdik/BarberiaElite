import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

// Importar imágenes desde src
import logo from "../../assets/imagenes/logo.jpeg";
import fondoLogin from "../../assets/imagenes/fondodegra3.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (correo === "usuario@ejemplo.com" && contrasena === "123456") {
      alert("Inicio de sesión exitoso ✅");
      navigate("/");
    } else {
      alert("Correo o contraseña incorrectos ❌");
    }
  };

  return (
    <div
      className="containerLogin"
      style={{
        backgroundImage: `url(${fondoLogin})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        padding: "60px 40px",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div className="loginBoxLogin">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
          <button type="submit">Iniciar sesión</button>
        </form>

        <p className="registerTextLogin">
          ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
        </p>
      </div>

      <div className="logoLogin">
        <img src={logo} alt="Barbería Elite" />
      </div>
    </div>
  );
};

export default Login;
