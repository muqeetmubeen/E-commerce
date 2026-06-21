import React, { createContext, useState } from "react";
import { useEffect } from "react";



export const Shopcontext = createContext (null);

    const getDefaultcart = () => {
        let cart = {};
        for (let index = 0; index < 300+1; index++) {
            cart[index ] = 0;
        }
        return cart;
    }


const Shopcontextprovider = (props)=>{

   const [all_product, setAll_Product] = useState([]);
   const [cartItem, setCartItem] = useState(getDefaultcart())
   
   useEffect(()=>{
     fetch('http://localhost:4000/allproducts')
     .then((response)=>response.json())
    .then((data)=>setAll_Product(data));
    
     if (localStorage.getItem('auth-token')) {
         fetch('http://localhost:4000/getcart',{
       method:'POST',
       headers:{
         Accept:'application/form-data',
         'auth-token':`${localStorage.getItem('auth-token')}`,
         'Content-Type':'application/json',
       },
       body: JSON.stringify({})
       }) 
       .then((response)=>response.json())
       .then((data)=>setCartItem(data))
        
     }
  
   },[])

    
 
const addTocart = (itemId) => {
  const token = localStorage.getItem("auth-token");

  if (!token) {
    alert("Please login first to add product to cart");
    return;
  }

  // update UI only if logged in
  setCartItem((prev) => ({
    ...prev,
    [itemId]: (prev[itemId] || 0) + 1,
  }));

  fetch('http://localhost:4000/addtocart', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'auth-token': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ itemId }),
  });
};
     const removeFromcart =(itemId) =>{
     setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
     if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/removefromcart',{
       method:'POST',
       headers:{
         Accept:'application/form-data',
         'auth-token':`${localStorage.getItem('auth-token')}`,
         'Content-Type':'application/json',
       },
         body:JSON.stringify({"itemId":itemId}),
       }) 
       .then((response)=>response.json())
       .then((data)=>setCartItem(data))
        
     }
      

     }
    
const getTotalAmount = () => {
  let totalAmount = 0;

  for (const item in cartItem) {
    if (cartItem[item] > 0) {
      let itemInfo = all_product.find(
        (product) => product.id === Number(item)
      );

      if (itemInfo) {
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
  }

  return totalAmount;
};
      const getTotalCartItem = () => {
        let totalItem = 0;
        for(const item in cartItem)
        {
            if (cartItem[item]>0) 
                {
                totalItem = cartItem[item];
            }
        }
        return totalItem;
      }



     
    const contextValue = { getTotalCartItem,getTotalAmount,all_product,cartItem,addTocart,removeFromcart};

    return (
    <Shopcontext.Provider value={contextValue}>
        {props.children}
    </Shopcontext.Provider>
    )
}

export default Shopcontextprovider;