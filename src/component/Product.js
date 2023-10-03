import { useContext } from 'react';
import './product.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ShopContext } from '../context/ShopContext';



export default function Product(props) {
    const {id,productName,price,productImage}= props.data;
    
    const {cartItems,addTocart,removeFromeCart} = useContext(ShopContext);
    const isInCart = cartItems?.some((item)=>item.id===id && item.count!==0 )
    const isCount =cartItems?.filter((row)=>row.id===id)[0]?.count
  return (
    
        <div className="col-12 col-md-6 col-lg-3">
            <div className="ccart shadow border">
            <img src={productImage} className='productimg' alt='img'/>
            <h4 className='text-center'>{productName}</h4>
            <div className="d-flex justify-content-between mx-3">
            <h6>price is :</h6>
            <span className='text-danger fw-bolder pe-3'>{price}$</span>
            </div> 
            <div className='text-center m-2'> 
            <button className='btn btn-info btn-sm fw-bolder rounded-3 me-2' onClick={()=>addTocart(id)} >+</button>
             {isCount>0 &&<span className='mx-1' >{isCount}</span>}
             {
               isInCart &&  <button className='btn btn-info fw-bolder btn-sm rounded-3 ms-2' onClick={()=>removeFromeCart(id)}>-</button>
             }
            </div>
            </div>
        </div>
    
  )
}
