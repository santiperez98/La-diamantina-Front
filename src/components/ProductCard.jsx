// src/components/ProductCard.jsx
const ProductCard = () => {
    return (
      <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        <img src="ruta/de/imagen.jpg" alt="Nombre del producto" className="w-full h-48 object-cover rounded-md" />
        <h3 className="text-lg font-semibold mt-2">Nombre del Producto</h3>
        <p className="mt-1 text-gray-600">Descripción breve del producto.</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Añadir al Carrito</button>
      </div>
    );
  };
  
  export default ProductCard;
  