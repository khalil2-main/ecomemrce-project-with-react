import { Header } from '../../component/header/header'

import{ products }from '../../../starting-code/data/products.js'
import './homePage.css'
import { ProductContainer } from '../../component/header/product-container/PoductContainer'

export function HomePage(){
  return<>
  <title>Ecomorce project</title>
   
    <Header></Header>
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

