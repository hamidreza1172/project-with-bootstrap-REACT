import './searchbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PRODUCT } from '../../data/PRODUCT'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
export default function SearchBar() {
  const {setInput}=useContext(ShopContext)
    
  const handlechange=(value)=>{
    setInput( PRODUCT.filter((user)=>{
    return user&& user.productName&&user.productName.toLowerCase().includes(value);
  }))    
}
 return (
   <div>
     <div className='container d-flex justify-content-center pt-4 input-group'>
        <input type="text" placeholder='enter your product ...' className='searchinput'  onChange={(e)=>handlechange(e.target.value)}/>
        <button className='searchbtn '>search</button>
        
    </div>
   </div>
    
  )
}
