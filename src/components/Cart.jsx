import React, { useRef, useEffect } from 'react';

const Cart = ({ cartItems, total, onClose, incrementQuantity, decrementQuantity, clearCart, removeFromCart }) => {
  const cartRef = useRef(null);

  // Cerrar carrito si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleWhatsAppMessage = () => {
    const message = [
      "Hola,",
      "Espero que estés teniendo un excelente día. Me gustaría realizar el siguiente pedido:",
      "",
      ...cartItems.map(item => 
        `Producto: ${item.name} ${item.size} ${item.color ? `(${item.color})` : ''} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`
      ),
      "",
      `Total: $${total.toFixed(2)}`,
      "Agradezco tu atención y quedo a la espera de tu respuesta.",
      "Saludos,",
      "[Tu nombre]",  // Reemplázalo con el nombre real
      "[Tu información de contacto]" // Reemplázalo con el contacto real
    ].join('%0A'); // '%0A' es el equivalente de un salto de línea en URL

    const whatsappUrl = `https://wa.me/5492604580315?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    // Contenedor que detecta clic fuera
    <div className="fixed inset-0 z-50">
      {/* Fondo oscuro para dar un efecto de modal */}
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      
      {/* Contenedor del carrito */}
      <div ref={cartRef} className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-6 transform translate-x-0 transition-transform duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          X
        </button>
        <h2 className="text-xl font-semibold mb-4">Carrito</h2>

        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          // Contenedor con scroll para la lista de productos
          <div className="flex-grow overflow-y-auto max-h-80">
            <ul className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <li key={item.id} className="bg-gray-100 rounded-lg p-4 shadow-md flex relative">
                  {/* Botón para eliminar el producto (X) */}
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-lg font-bold"
                  >
                    &times;
                  </button>
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p>{item.size} {item.color ? `(${item.color})` : ''}</p>
                    <p className="font-bold">${item.price} x {item.quantity}</p>
                    <div className="flex items-center gap-2 mt-2">
                    <button 
  onClick={() => decrementQuantity(item.id)} 
  className="bg-gray-300 p-1 rounded"
>-</button>
<span>{item.quantity}</span>
<button 
  onClick={() => incrementQuantity(item.id)} 
  className="bg-gray-300 p-1 rounded"
>+</button>
                    </div>
                  </div>
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md ml-4" />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Total y botones */}
        <div className="mt-6">
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button 
            className="w-full mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600" 
            onClick={handleWhatsAppMessage}
          >
            Comprar
          </button>
          <button 
            className="w-full mt-2 bg-red-500 text-white py-2 rounded hover:bg-red-600" 
            onClick={clearCart}
          >
            Vaciar Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
