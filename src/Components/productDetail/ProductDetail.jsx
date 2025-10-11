import React from 'react'
import star from '../Assets/star.png'
import star_dull from '../Assets/star_dull.png'
import { useProducts } from '../../Context/ProductContext'
const ProductDetail = ({props}) => {
  const {addToCart,removeFromCart}= useProducts();
  if (!props) { return <p>Loading product details...</p>;} // prevent crash
  return (
    <div className='max-w-8xl max-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
     <div className='flex gap-5 '>
        <div>
          <img className='w-full h-60' src={props.image} alt="" />
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap sm:gap-2 md:gap-5 lg:gap-6'>
          <img className='w-full h-25' src={props.image} alt="" />
          <img className='w-full h-25' src={props.image} alt="" />
          <img className='w-full h-25' src={props.image} alt="" />
          <img className='w-full h-25' src={props.image} alt="" />
        </div>
     </div>
     <div className="flex flex-col  gap-4 items-start sm:items-center  ">
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
        <button onClick={() => {addToCart(props.id)}} className='px-5 py-3 text-2xl text-black bg-blue-500 mt-5 object-cover rounded-4xl hover:bg-red-500  hover:scale-110 transition-transform duration-300'>Add to Cart</button>
     </div>
    </div>
  )
}

export default ProductDetail