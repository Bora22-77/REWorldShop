import React from 'react'
import { useProducts } from '../../Context/ProductContext'
import remove_icon from '../Assets/remove_icon.png'

const CartItem = () => {
  const { products, cartItems, getTotalAmount, removeFromCart } = useProducts();
  

  return (
    <div  className="bg-no-repeat bg-center bg-cover bg-fixed mb-20 max-w-8xl max-auto px-5 py-12 space-y-12" style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1557821552-17105176677c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydHxlbnwwfHwwfHx8MA%3D%3D')"
  }}>
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
            const itemTotal = e.newPrice * cartItems[e.id];
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
                  ${e.newPrice}
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
                    className="w-6 h-6 cursor-pointer hover:scale-130 transition-transform"
                    onClick={() => removeFromCart(e.id)}
                  />
                </div>
              </li>
            );
          }
        })}
      </ul>

      <div className=" bg-gray-200 mt-9 px-5 py-12 rounded-3xl mb-5 md:flex justify-between max-w-8xl max-auto  ">
            <div className=" w-1/2 mr-4">
                <h1 className="text-xl md:text-2xl font-bold text-red-900 mb-10">Cart Totals</h1>
                <div>
                        <div className="flex justify-between">
                             <p className="text-xl md:text-2xl font-bold text-black">Subtotal</p>
                             <p className="text-xl md:text-2xl font-bold text-black">${getTotalAmount()}</p>
                         </div>
                        <hr />
                        <div className="flex justify-between">
                            <p className="text-xl md:text-2xl font-bold text-black">phipping fee</p>
                            <p className="text-xl md:text-2xl font-bold text-black">Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <h3 className="text-xl md:text-2xl font-bold text-black">Total</h3>
                            <h3 className="text-xl md:text-2xl font-bold text-black">${getTotalAmount()}</h3>
                        </div>
                   
                    <button className="px-5 py-6 rounded-xl font-bold text-white mt-7 bg-red-800">PROCEED TO CHECKOUT</button>
                </div>
            </div>
            <div className=" flex flex-col ml-4 bg-blue-100 rounded-2xl ">
                <p className="text-xl md:text-2xl font-bold text-black m-auto mt-7">If you have a promo code, Enter it here</p>
                <div className="mt-6">
                    <input type="text" placeholder='promo code' className="text-xl md:text-2xl font-bold text-black bg-white rounded-xl px-8 py-3"/>
                    <button className="text-xl md:text-2xl font-bold  bg-blue-800 text-white rounded-xl px-8 py-3">Submit</button>
                </div>
            </div>

        </div>
    </div>
  </div>
  );
};

export default CartItem;
