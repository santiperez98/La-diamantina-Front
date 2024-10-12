import React from 'react';

const Cart = ({ cartItems, total, onClose, incrementQuantity, decrementQuantity, clearCart }) => {
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
      "[Tu nombre]",  // Asegúrate de reemplazarlo con el nombre real o puedes pasarlo como prop
      "[Tu información de contacto]" // Reemplázalo con el contacto real o también puedes pasarlo como prop
    ].join('%0A');

    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-6 transform translate-x-0 transition-transform duration-300">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
        X
      </button>
      <h2 className="text-xl font-semibold mb-4">Carrito</h2>

      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {cartItems.map((item, index) => (
            <li key={index} className="bg-gray-100 rounded-lg p-4 shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>{item.size} {item.color ? `(${item.color})` : ''}</p>
                <p className="font-bold">${item.price} x {item.quantity}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button 
                    onClick={() => decrementQuantity(index)} 
                    className="bg-gray-300 p-1 rounded"
                  >-</button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => incrementQuantity(index)} 
                    className="bg-gray-300 p-1 rounded"
                  >+</button>
                </div>
              </div>
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
            </li>
          ))}
        </ul>
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
  );
};

export default Cart;
