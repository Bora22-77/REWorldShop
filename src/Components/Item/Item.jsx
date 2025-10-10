import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id,name,image,oldPrice,newPrice} ) => {
  return (
    <div>
      <div className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
  {/* Product Image */}
  <Link to={`/product/${id}`} onClick={() => window.scrollTo(0,0)}>
    <img
      src={image}
      alt={name}
      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
    />
  </Link>

  {/* Product Name */}
  <p className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-blue-900 line-clamp-1">
    {name}
  </p>

  {/* Price Section */}
  <div className="flex items-center gap-3 mt-1">
    <span className=" text-base sm:text-lg md:text-xl text-red-500 font-medium line-through">
      ${oldPrice}
    </span>
    {newPrice && (
      <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
        ${newPrice}
      </span>
    )}
  </div>
</div>

    </div>
  )
}

export default Item