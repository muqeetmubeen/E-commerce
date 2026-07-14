import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Shop from './Pages/Shop'
import Shopcategory from './Pages/Shopcategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Loginsinup from './Pages/Loginsignup'
import Footer from './Component/Footer/Footer'
import men_banner from './Component/Assets/banner_mens.png'
import women_banner from './Component/Assets/banner_women.png'
import kid_banner from './Component/Assets/banner_kids.png'





function App() {

  return (
    <>
      <div>
        <BrowserRouter>
         <Navbar/>
        <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<Shopcategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<Shopcategory banner={women_banner} category="women" />}/>
        <Route path='/kids' element={<Shopcategory banner={kid_banner} category="kid"/>}/>    
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsinup/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>


        </div>
    </>
  )
}

export default App
