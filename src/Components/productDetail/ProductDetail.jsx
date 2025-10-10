import React from 'react'
import star from '../Assets/star.png'
import star_dull from '../Assets/star_dull.png'
import { useProducts } from '../../Context/ProductContext'
const ProductDetail = ({props}) => {
  const {addToCart,removeFromCart}= useProducts();
  if (!props) { return <p>Loading product details...</p>;} // prevent crash
  return (
    <div className='flex'>
     <div className='flex gap-5 w-1/2'>
        <div>
          <img className='w-96' src={props.image} alt="" />
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap sm:gap-2 md:gap-5 lg:gap-6'>
          <img className='h-40 gap-5' src={props.image} alt="" />
          <img className='h-40 gap-5' src={props.image} alt="" />
          <img className='h-40 gap-5' src={props.image} alt="" />
          <img className='h-40 gap-5' src={props.image} alt="" />
        </div>
     </div>
     <div className="flex flex-col w-1/2 gap-4 items-center relative top-30 right-40 ">
        <h2 className='text-3xl text-blue-950 font-bold'>{props.name}</h2>
        <div className="flex gap-2">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star_dull} alt="" />
          <p>(168)</p>
        </div>
        <h2 className='text-4xl text-yellow-950'>${props.newPrice}</h2>
        <button onClick={() => {addToCart(props.id)}} className='px-5 py-3 text-2xl text-black bg-blue-500 mt-5'>Add to Cart</button>
     </div>
    </div>
  )
}

export default ProductDetail