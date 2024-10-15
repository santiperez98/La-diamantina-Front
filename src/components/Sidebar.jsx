import { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import Dashboard from "./Dashboard";
import CreateProducts from "./CreateProducts";

const Sidebar = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard"); // Estado para manejar el componente activo

  const renderComponent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <Dashboard />;
      case "Crear":
        return <CreateProducts />;
      case "Eliminar":
        return <CreateProducts />;
      case "favorites":
        return <Eliminar />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

      <div className="flex flex-col lg:flex-row h-screen">
        {/* aside */}
        <aside className="flex flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2 w-full lg:w-1/4">
          <Link
            to="/dashboard" // Cambiado a Link
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            onClick={() => setActiveComponent("dashboard")}
          >
            <span className="text-2xl"><i className="bx bx-home"></i></span>
            <span>Dashboard</span>
          </Link>

          <Link
            to="/create" // Cambiado a Link
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            onClick={() => setActiveComponent("Crear")}
          >
            <span className="text-2xl"><i className="bx bx-cart"></i></span>
            <span>Crear</span>
          </Link>

          <Link
            to="/delete" // Cambiado a Link
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            onClick={() => setActiveComponent("Eliminar")}
          >
            <span className="text-2xl"><i className="bx bx-shopping-bag"></i></span>
            <span>Eliminar</span>
          </Link>

          <Link
            to="/favorites" // Cambiado a Link
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            onClick={() => setActiveComponent("favorites")}
          >
            <span className="text-2xl"><i className="bx bx-heart"></i></span>
            <span>Editar</span>
          </Link>
        </aside>

        {/* Renderiza el componente activo */}
        <div className="flex-1 p-4 overflow-y-auto">
          {renderComponent()}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
