import React from 'react'
import { useProducts } from '../../Context/ProductContext'

const CartItem = () => {
  const {products} = useProducts();
  return (
    <div>
      <div className="">
        <p>Product</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <ul className="">
        {
          products.map((f) =>{
            if(CartItem[f.id>0]){
              <img src={products.image} alt="" />
            }
          } )
        }
      </ul>
    </div>
  )
}

export default CartItem