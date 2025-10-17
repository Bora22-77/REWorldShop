import React from 'react'
import { useProducts } from '../Context/ProductContext';
import Item from '../Components/Item/Item';
import { useParams } from 'react-router-dom';

const Promotion = () => {
   const { products, loading } = useProducts();
    if (loading) return <p>Loading products...</p>;
   
  return (
    <div  className='max-w-8xl max-auto px-5 py-12 space-y-12'>
      <div className="bg-no-repeat bg-center bg-fixed" style={{backgroundImage: "url('https://n1.octostatic.com/cdn-cgi/image/width=3840,fit=contain,quality=85,format=auto/nextopart/static/hashed/hero-banner-solid.c1dc78c4a3.png')"}}>
        <h1 className='text-7xl justify-center text-center font-bold bg-gradient-to-r from-black via-blue-500 to-blue-700 bg-clip-text text-transparent '>Promotion</h1>
      </div>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  bg-gradient-to-b from-gray-200 via-purple-300 to-blue-300">
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