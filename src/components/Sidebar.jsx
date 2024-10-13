import { useState } from "react";
import Dashboard from "./Dashboard";
import CreateProducts from "./CreateProducts";

const Sidebar = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard"); // Estado para manejar el componente activo
  console.log(activeComponent, "activeComponent");

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
          <a
            href="#"
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            onClick={() => setActiveComponent("dashboard")}
          >
            <span className="text-2xl"><i className="bx bx-home"></i></span>
            <span>Dashboard</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            onClick={() => setActiveComponent("Crear")}
          >
            <span className="text-2xl"><i className="bx bx-cart"></i></span>
            <span>Crear</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            onClick={() => setActiveComponent("shopping")}
          >
            <span className="text-2xl"><i className="bx bx-shopping-bag"></i></span>
            <span>Eliminar</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            onClick={() => setActiveComponent("favorites")}
          >
            <span className="text-2xl"><i className="bx bx-heart"></i></span>
            <span>Editar</span>
          </a>
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
