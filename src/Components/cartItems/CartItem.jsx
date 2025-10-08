import React from 'react'
import { useProducts } from '../../Context/ProductContext'
import remove_icon from '../Assets/remove_icon.png'

const CartItem = () => {
  const { products, cartItems, getTotalAmount, removeFromCart } = useProducts();

  return (
    <div className="px-4 md:px-10 lg:px-20 py-6">
      {/* Header Row */}
      <div className="hidden md:grid grid-cols-6 font-bold text-lg border-b border-gray-300 pb-3">
        <p>Image</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Cart Items */}
      <ul className="mt-4 space-y-4">
        {products.map((e) => {
          if (cartItems[e.id] > 0) {
            const itemTotal = e.oldPrice * cartItems[e.id];
            return (
              <li
                key={e.id}
                className="grid grid-cols-2 md:grid-cols-6 items-center gap-4 bg-gray-50 p-4 rounded-xl shadow-sm"
              >
                {/* Product Image */}
                <div className="flex justify-center md:justify-start">
                  <img
                    src={e.image}
                    alt={e.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </div>

                {/* Name */}
                <p className="text-center md:text-left font-medium text-base md:text-lg">
                  {e.name}
                </p>

                {/* Price */}
                <p className="text-center text-gray-700 hidden md:block">
                  ${e.oldPrice}
                </p>

                {/* Quantity */}
                <p className="text-center text-gray-700">
                  {cartItems[e.id]}
                </p>

                {/* Total */}
                <p className="text-center text-gray-700 hidden md:block">
                  ${itemTotal.toFixed(2)}
                </p>

                {/* Remove */}
                <div className="flex justify-center">
                  <img
                    src={remove_icon}
                    alt="remove"
                    className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => removeFromCart(e.id)}
                  />
                </div>
              </li>
            );
          }
        })}
      </ul>

      {/* Total Section */}
      <div className="mt-8 text-right">
        <h2 className="text-xl md:text-2xl font-semibold">
          Total: ${getTotalAmount().toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default CartItem;
