import React, { useContext } from 'react'
import {Shopcontext} from '../Context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Component/Breadcrum/Breadcrum';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import Description from '../Component/Description/Description';
import Relatedproduct from '../Component/Relatedproduct/Relatedproduct';


const Product = () => {
  const {all_product} = useContext(Shopcontext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number (productId))
    if (!product) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
     <Breadcrum product={product}/>
     <ProductDisplay product={product}/>
     <Description/>
     <Relatedproduct/>
    </div>
  )
}


export default Product


