import React from 'react'
import { useProducts } from '../../Context/ProductContext'
import Item from '../Item/Item';


const RelateProduct = () => {
    const {products} = useProducts();
  return (
    <div className='max-w-8xl max-auto px-5 py-12 space-y-12'>
        <h1 className='text-7xl justify-center text-center font-bold bg-gradient-to-r from-green-800 via-gray-500 to-yellow-200 bg-clip-text text-transparent'>Talated Product</h1>
        <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  bg-gradient-to-b from-gray-200 via-purple-300 to-blue-300'>
            {
                products.map((item,index) => (
                    <Item
                    key={ item.id || index}
                     id={item.id}
                     image={item.image}
                    name={item.name}
                    newPrice={item.newPrice}
                    />
                ))
            }
        </ul>
    </div>
  )
}

export default RelateProduct