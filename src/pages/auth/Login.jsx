import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/imagenes/logo.jpeg";
import fondoLogin from "../../assets/imagenes/fondodegra3.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [sesion, setSesion] = useState(null);

  useEffect(() => {
    const sesionActiva = JSON.parse(localStorage.getItem("sesionActiva"));
    if (sesionActiva) {
      setSesion(sesionActiva);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuario"));

    if (
      usuarioRegistrado &&
      correo === usuarioRegistrado.correo &&
      contrasena === usuarioRegistrado.contraseña
    ) {
      alert(`Bienvenido, ${usuarioRegistrado.nombre} ✅`);
      localStorage.setItem("sesionActiva", JSON.stringify(usuarioRegistrado));
      navigate("/");
    } else {
      alert("Correo o contraseña incorrectos ❌");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("sesionActiva");
    setSesion(null);
    alert("Sesión cerrada correctamente 👋");
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
      }}
    >
      {sesion ? (
        <div className="loginBoxLogin">
          <h2>Ya iniciaste sesión como {sesion.nombre}</h2>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <button onClick={() => navigate("/")}>Ir al inicio</button>
        </div>
      ) : (
        <>
          {/* Formulario a la izquierda */}
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

          {/* Logo a la derecha */}
          <div className="logoLogin">
            <img src={logo} alt="Barbería Elite" />
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
