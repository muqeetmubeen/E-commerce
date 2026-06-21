import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Shopcontextprovider from './Context/Shopcontext.jsx'



createRoot(document.getElementById('root')).render(
  
    <Shopcontextprovider>    
        <App />
    </Shopcontextprovider>

)
