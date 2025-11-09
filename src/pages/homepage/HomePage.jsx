
import axios from 'axios'

import './homePage.css'
import { ProductContainer } from '../../components/header/product-container/PoductContainer'
import { Header } from '../../components/header/header.jsx'
import { useEffect, useState } from 'react'

export function HomePage(){
 const [products,setProducts]= useState([]);
  const [cart,setCart]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/api/products').then((res)=>{
      setProducts(res.data);
  
    })   
  },[])
  //cart items
  useEffect(()=>{
    axios.get('http://localhost:3000/api/cart-items').then((res=>{
      setCart(res.data);
    }))
  },[])
  return<>
  <title>Ecomorce project</title>
   
    <Header cart={cart} />
    <div className="home-page">
      <div className="products-grid">
       { products.map((product)=>{
        
        return(

          <ProductContainer key={product.id} product={product}/>
          )
       })
       }
      </div>
    </div>
  </>
}

