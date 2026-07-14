import React from 'react'
import './CSS/Loginsignup.css'
import { useState } from 'react'

const Loginsinup = () => {

  const [state, setState] = useState("Login")
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const login = async ()=>{
   console.log("login function is executed",formData);
     let responseData;

  await fetch("https://e-commerce-tan-iota-49.vercel.app/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      responseData = data;
    });

  if (responseData.success) {
    localStorage.setItem("auth-token", responseData.token);
    window.location.replace("/");
  }
  else
  {
    alert(responseData.errors )
  }   
  }

  const changeHandler = (e) =>{
   setFormData({...formData,[e.target.name]:e.target.value})
  }

 /* const signup = async ()=>{
   console.log("signup function excuted ",formData);
   let responseData;
   await fetch("http://localhost:4000/signup",{
    method:"POST",
    headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData)
    }).then((response)=> response.json()).then((data)=>responseData)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
    }
   }*/
  const signup = async () => {
  console.log("signup function executed", formData);

  let responseData;

  await fetch("https://e-commerce-tan-iota-49.vercel.app/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      responseData = data;
    });

  if (responseData.success) {
    localStorage.setItem("auth-token", responseData.token);
    window.location.replace("/");
  }
  else
  {
    alert(responseData.errors )
  }
};

  return (
    <div className='loginsignup'>
    <div className="login-container">
      <h1>{state}</h1>
      <div className="login-field">
        {state==="Sign Up"?<input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name' />:<></>}
        <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Email Address' />
        <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Password' />
      </div>
      <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
      {state==="Sign Up"?
      <p className="login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>  
      :<p className="login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
      }
        <div className="login-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuing, i agree to the terms of use & privacy policy </p>
      </div>
    </div>
    </div>
  )
}

export default Loginsinup