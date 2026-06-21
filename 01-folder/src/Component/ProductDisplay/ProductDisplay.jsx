import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { Shopcontext } from '../../Context/Shopcontext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addTocart} =useContext(Shopcontext);
  return (
    <div className='productdisplay'>
    <div className="display-left">
     <div className="image-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
     </div>
     <div className="display-img">
        <img className='display-main-img' src={product.image} alt="" />
     </div>
    </div>
    <div className="display-right">
       <h1>{product.name}</h1>
       <div className="display-right-start">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>(122)</p>
       </div>
       <div className="display-right-price">
         <div className="display-right-price-old">${product.old_price}</div>
         <div className="display-right-price-new">${product.new_price}</div>
       </div>
       <div className="display-right-description">
         A lightweight , usually knitted ,pullover shirt, close fitting
         and with a around neckline and short sleeves worn as a undershirt
         or outer garment</div>
       <div className="display-right-size">
         <h1>Select Size</h1>
         <div className="display-right-sizes">
         <div>S</div>
         <div>M</div>
         <div>L</div>
         <div>XL</div>
         <div>XXL</div>
         </div>

       </div>
       <button onClick={() =>{addTocart(product.id)}}>ADD TO CART</button>
       <p className="display-right-category"><span>category :</span> Women ,T-Shirt, Crop Top</p>
       
       <p className="display-right-category"><span>Tags :</span>Modern, Latest</p>
    </div>
    </div>
  )
}

export default ProductDisplay