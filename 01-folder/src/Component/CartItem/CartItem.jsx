import React, { useContext } from 'react'
import './CartItem.css'
import { Shopcontext } from '../../Context/Shopcontext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const { getTotalAmount, all_product,cartItem,removeFromcart} = useContext(Shopcontext);
  return (
    <div className='cartitem'>
     <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
     </div>
     <hr />
    {all_product.map((e)=>{
      if(cartItem[e.id]>0)
      {
        return  <div key={e.id}>
                 <div className="format format-main">
                 <img src={e.image} alt="" className='carticon-product-icon' />
                 <p>{e.name}</p>
                 <p>${e.new_price}</p>
                 <button className="cartitem-quantity">{cartItem[e.id]}</button>
                 <p>${e.new_price*cartItem[e.id]}</p>
                 <img className='carticon-remove-icon' src={remove_icon} onClick={()=>{removeFromcart(e.id)}} alt="" />
                 </div>
                 <hr />
                 </div>
      }
      return null;
    })}

      <div className="cartitem-down">
        <div className="cartitem-total">
            <h1>Cart Total</h1>
            <div>
                <div className="total-item">
                    <p>SubTotal</p>
                    <p>${getTotalAmount()}</p>
                </div>
                <hr />
                <div className="total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="total-item">
                    <h3>Total</h3>
                    <h3>${getTotalAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promocode">
            <p>If you have a promo code ,Enter it here</p>
            <div className="promobox">
                <input type="text" placeholder='promo code'/>
                <button>Submit</button>
            </div>
        </div>
        </div>   

    </div>
  )
}

export default CartItem