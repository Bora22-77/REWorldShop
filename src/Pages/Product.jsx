
import { useParams } from 'react-router-dom';
import ProductDetail from '../Components/productDetail/productDetail';
import { useProducts } from '../Context/ProductContext';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import RelateProduct from '../Components/RelateProduct/RelateProduct';
const Product = () => {
   const { products } = useProducts();
  const { productId } = useParams();

  const product = products.find((e)=> e.id === Number(productId));

console.log(product);


  return (
    <div>
      <div>
       <Breadcrumb props={product}/>
       <ProductDetail props={product}/> 
       <RelateProduct/>
      </div>
    </div>
  )
}

export default Product