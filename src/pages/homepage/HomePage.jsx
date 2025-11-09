
import axios from 'axios'

import './homePage.css'
import { ProductContainer } from '../../components/product-container/PoductContainer.jsx'
import { Header } from '../../components/header/header.jsx'
import { useEffect, useState } from 'react'

export function HomePage({cart}){
 const [products,setProducts]= useState([]);
  useEffect(()=>{
    axios.get('/api/products').then((res)=>{
      setProducts(res.data);
  
    })   
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

