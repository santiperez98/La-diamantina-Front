const ProductCard = () => {
    return (
      <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          src="ruta/de/imagen.jpg"
          alt="Nombre del producto"
          className="w-full h-48 object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold mt-2">Nombre del Producto</h3>
        <p className="mt-1 text-gray-600">Descripción breve del producto.</p>
  
        {/* Información de precio */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-blue-600">$XX.XX</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Añadir al Carrito
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  