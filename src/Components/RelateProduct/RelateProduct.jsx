import React from 'react'
import { useProducts } from '../../Context/ProductContext'
import Item from '../Item/Item';


const RelateProduct = () => {
    const {products} = useProducts();
  return (
    <div>
        <h1>Talated Product</h1>
        <ul>
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