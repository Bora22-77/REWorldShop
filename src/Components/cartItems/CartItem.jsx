import React from 'react'
import { useProducts } from '../../Context/ProductContext'

const CartItem = () => {
  const {products,cartItems,getTotalAmount} = useProducts();
  console.log(cartItems);
  return (
    <div>
      <div className="flex">
        <p>Product</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <ul className="">
        {
          products.map((e) =>{
            if(cartItems[e.id]>0){
              return (
                <li key={e.id} className='flex mb-15'>
                  <img src={e.image} alt="" className='w-36'/>
                  <p>{e.name}</p>
                  <p>${e.oldPrice}</p>
                  <p>{cartItems[e.id]}</p>
                </li>
                
              )
            }
          })
        }
      </ul>
    </div>
  )
}

export default CartItem