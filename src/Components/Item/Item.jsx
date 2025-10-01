import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id,name,image,oldPrice,newPrice} ) => {
  return (
    <div>
      <div>
        <Link to={`/product/${id}`}><img src={image} alt=""  className='h-30 sm:h-36 md:h-46 lg:h-56 rounded-4xl'/></Link>
         <p className='text-2xl font-600 text-blue-900'>{name}</p>
         <div className='text-2xl font-200 text-black'>
            ${oldPrice}
        </div>
         <div className="">{newPrice}</div> {/*for promotion */}
      </div>
    </div>
  )
}

export default Item