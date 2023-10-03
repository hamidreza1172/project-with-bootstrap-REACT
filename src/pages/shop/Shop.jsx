import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {PRODUCT} from '../../data/PRODUCT.js'
import Product from '../../component/Product.js'

import Carousel  from '../../component/Carusels/Carousel.js'
import Carousel2 from '../../component/Carusels/Carousel2.js'
import Carousel3 from '../../component/Carusels/Carousel3.js'
import SearchBar from '../../component/searchbar/SearchBar.js'
import { ShopContext } from '../../context/ShopContext'
import { useContext } from 'react'

export default function Shop() {
  const {input}=useContext(ShopContext)
  return (


    <div className='background'>
      
      <div className='d-flex justify-content-center d-md-none '>
      <Carousel2/>
      </div>
      <div className='d-none d-md-block text-center'>
        <Carousel3/>
      </div>
      <SearchBar/>
      <div className='container'>
     <div className="row mx-4">
      {PRODUCT.map((prodata)=>{
        return <Product key={prodata.id} data={prodata}/>
      })}
     </div>
    </div>

    <div ><Carousel/></div>
    </div>
  )
}
