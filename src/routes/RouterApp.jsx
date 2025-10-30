import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Importaciones de páginas principales
import Login from "../pages/auth/Login";
import Registro from "../pages/auth/Registro";
import Home from "../pages/home/Home";

// Importaciones de servicios
import BarbaServicio from "../pages/barba-servicio/BarbaServicio";
import CorteBarbaServicio from "../pages/corte-barba-servicio/CorteBarbaServicio";
import CorteServicio from "../pages/corte-servicio/CorteServicio";
import DepilacionServicio from "../pages/depilacion-servicio/DepilacionServicio";
import LimpiezaFacialServicio from "../pages/Limpieza-facial-servicio/LimpiezaFacialServicio";
import Pagos from "../pages/pagos/Pagos";
import Profesionales from "../pages/profesionales/Profesionales";
import SelectHora from "../pages/select-hora/SelectHora";

// Definición del arreglo de rutas
const routes = [
  { path: "/login", element: <Login /> },
  { path: "/registro", element: <Registro /> },
  { path: "/", element: <Home /> },
  { path: "/barba", element: <BarbaServicio /> },
  { path: "/corte-barba", element: <CorteBarbaServicio /> },
  { path: "/corte", element: <CorteServicio /> },
  { path: "/depilacion", element: <DepilacionServicio /> },
  { path: "/limpieza-facial", element: <LimpiezaFacialServicio /> },
  { path: "/pagos", element: <Pagos /> },
  { path: "/profesionales", element: <Profesionales /> },
  { path: "/seleccionar-hora", element: <SelectHora /> },
];

// Componente principal que renderiza las rutas
const RouterApp = () => {
  return (
    <Router>
      <Routes>
        {routes.map((r, i) => (
          <Route key={i} path={r.path} element={r.element} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;
