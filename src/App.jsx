
import { HomePage } from './pages/homepage/HomePage'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import './App.css'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/Orders/OrdersPage'

function App() {
 

  return (
   <>
   <Routes>
    <Route path='' element={<HomePage/>}/>
    <Route path='checkout' element={ <CheckoutPage/>}/>
    <Route path='orders' element={ <OrdersPage/>}/>
   </Routes>

    </>
  )
}

export default App
