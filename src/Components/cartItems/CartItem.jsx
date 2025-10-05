import React from 'react'
import { useProducts } from '../../Context/ProductContext'

const CartItem = () => {
  const {products,cartItems,getTotalAmount} = useProducts();
  console.log(cartItems);
  return (
    <div>
      <div className=" flex grid-cols-4 gap-3 sm:gap-3 md:gap-4 lg:gap-5 justify-around mr-3 ml-3 font-bold">
        <p>Product</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <ul>
        {
          products.map((e) =>{
            if(cartItems[e.id]>0){
              return (
                <div>
                  <li key={e.id} className='flex grid-cols-4 justify-around gap-0 sm:gap-1 md:grid-cols-3  mt-4 '>
                  <img src={e.image} alt="" className='w-24 sm:w-24 relative right-9 sm:right-6  '/>
                  <p className='text-base sm:text-xl md:text-2xl lg:text-3xl  relative right-25 sm:right-32 md:right-35 lg:right-55'>{e.name}</p>
                  <p className='text-base sm:text-xl md:text-2xl lg:text-3xl  relative right-40 sm:right-54 md:right-60 lg:right-100'>${e.oldPrice}</p>
                  <p className='text-base sm:text-xl md:text-2xl lg:text-3xl  relative right-45 sm:right-60 md:right-70 lg:right-120'>{cartItems[e.id]}</p>
                </li>
                  <hr className='mt-5'/>
                </div>
                
                
              )
            }
          })
        }
      </ul>
    </div>
  )
}

export default CartItem