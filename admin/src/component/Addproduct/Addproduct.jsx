import React, { useState } from 'react'
import './Addproduct.css'
import upload_area from '../../assets/upload_area.svg'

const Addproduct = () => {

  const [image, setImage] = useState(false)
  const [productDetail, setProductDetail] = useState({
    name: "",
    image : "",
    category : "women",
    new_price : "",
    old_price : ""
  })



  const imageHandler = (e)=>{
    setImage(e.target.files[0]);
  }

  const changeHandler = (e)=>{
   setProductDetail({...productDetail,[e.target.name]:e.target.value})
  }
  
  const Add_Product = async ()=>{
    console.log(productDetail)

    let responseData;
    let product = productDetail;

    let formData = new FormData();
    formData.append('product',image);

    await fetch('https://e-commerce-tan-iota-49.vercel.app/upload',{
      method:'post',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp) => resp.json()).then((data)=>{responseData=data});

   if(responseData.success)
   {
    product.image = responseData.image_url; 
    console.log(product);
    await fetch('https://e-commerce-tan-iota-49.vercel.app/addproduct',{
      method:'post',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(product)
    }).then((resp)=>resp.json()).then((data)=>{
      data.success?alert("Product Added"):alert("Failed")
    })
    
  }

  } 

  return (
    <div className='add-product'>
      <div className="itemfield ">
      <p>Product title</p>
      <input value={productDetail.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
      </div>
     <div className="price">
        <div className="itemfield">
            <p>Price</p>
            <input value={productDetail.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
        </div>
        <div className="itemfield">
            <p>Offer Price</p>
            <input value={productDetail.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
        </div>  
     </div>
     <div className="itemfield">
        <p>Product category</p>
        <select value={productDetail.category} onChange={changeHandler} name="category" className='selector'>
        <option value="women">Women</option>
        <option value="men">Men</option>
        <option value="kid">Kid</option>
        </select>
     </div>
     <div className="itemfield">
      <label htmlFor="file-input">
        <img src={image?URL.createObjectURL(image):upload_area} className='thumnail-img' alt="" />
      </label>
      <input onChange={imageHandler}  type="file" name='image' id='file-input' hidden />
     </div>
     <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}


export default Addproduct