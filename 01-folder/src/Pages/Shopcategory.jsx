import React, { useContext } from 'react'
import './CSS/Shopcategory.css'
import { Shopcontext } from '../Context/Shopcontext';
import dropdown_icon from '../Component/Assets/dropdown_icon.png'
import Item from '../Component/Item/Item'

const Shopcategory = (props) => {
  const {all_product} = useContext(Shopcontext);
  
  return (
    <div className='Shopcategory'>
     <img className="banner" src={props.banner} alt="" />
     <div className="indexsort">
      <p>
        <span>Showing 1-12</span> outs of 36 products
      </p>
      <div className="sort">
        Sort by <img src={dropdown_icon} alt="" />
      </div>
     </div>
     <div className="product">
      {all_product.map((item,i)=>{
         if(props.category===item.category){
          return <Item key={i} id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
         }
         else{
          return null;
         }

      })}
     </div>
     <div className="loadmore">
      Explore More
     </div>
    </div>
  )
}

export default Shopcategory