import React from 'react'
import { useProducts } from '../Context/ProductContext';
import Item from '../Components/Item/Item';
import { useParams } from 'react-router-dom';

const Promotion = () => {
   const { products, loading } = useProducts();
    if (loading) return <p>Loading products...</p>;
   
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 via-orange-200-500 to-yellow-200">
        <h1 className='text-7xl justify-center text-center font-bold bg-gradient-to-r from-green-800 via-gray-500 to-yellow-200 bg-clip-text text-transparent'>Promotion</h1>
      </div>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap gap-9 sm:gap-9 md:gap-10 lg:gap-12 bg-gradient-to-b from-gray-200 via-purple-300 to-blue-300 p-26 sm:p-36 md:p-40 lg:p-48">
        {
          products.map((item,index)=>(
           <Item
            key={ item.id || index}
            id={item.id}
            image={item.image}
            name={item.name}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
          />
          ))
        }
      </ul>
    </div>
  )
}

export default Promotion