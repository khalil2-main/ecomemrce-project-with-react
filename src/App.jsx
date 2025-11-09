
import { HomePage } from './pages/homepage/HomePage'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import './App.css'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/Orders/OrdersPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const [cart,setCart]=useState([]);
  
    //cart items
      useEffect(()=>{
        axios.get('/api/cart-items?expand=product').then((res=>{
          setCart(res.data);
        }))
      },[])

  return (
   <>
   <Routes>
    <Route path='' element={<HomePage cart={cart}  />}/>
    <Route path='checkout' element={ <CheckoutPage cart={cart} />}/>
    <Route path='orders' element={ <OrdersPage cart={cart} />}/>
   </Routes>

    </>
  )
}

export default App
