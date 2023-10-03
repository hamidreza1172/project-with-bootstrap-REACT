import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ShopContext } from '../../context/ShopContext'
import { PRODUCT } from '../../data/PRODUCT'
import Product from '../../component/Product'
export default function Cart() {
 
   const {cartItems,showtextbas}=useContext(ShopContext)

  return (
<div className='container text-center'>
  <div className="row" style={{minHeight:'70vh'}}>
    {showtextbas && <div className='w-100 d-flex justify-content-center align-items-center'><h1 className='m-5 textfornofile'>THERE IS NO FILE ....</h1></div> }
    {PRODUCT.map((p)=>{
    if(cartItems.some((i)=>i.id===p.id && i.count>0))
    return <Product data={p}/>
   })}
 </div>
</div>
  
)
  }
  

