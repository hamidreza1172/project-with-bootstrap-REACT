import { useState } from "react";
import { createContext } from "react";

 export const ShopContext = createContext(null);


 export const ShopContextProvider = (props)=>{
       
    const [cartItems,setCartItems] = useState([]);
    const [number,setNumber]=useState(0);
    const [input,setInput]=useState([])
    const [showtextbas,setShotextbas]=useState(true);

    

    const addTocart=(itemId)=>{
      setShotextbas(false);
       setNumber(number+1)
      if(!cartItems?.find((item)=>item.id===itemId))
        setCartItems([...cartItems , {id : itemId, count : 1}])
      else
      setCartItems(cartItems?.map((item)=>{
          if(item.id===itemId)
          return {...item , count : item.count +1} 
            else return item;
      }))
   }       


    const removeFromeCart =(itemId)=>{
      setNumber(number-1)
       setCartItems(cartItems.map((i)=>{
        if(i.id===itemId)
        return {...i, count : i.count===0 ? 0: i.count-1}
    else return i;
       }))

    }

    const contextValue={number,cartItems,addTocart,removeFromeCart,showtextbas,setInput,input}
    
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
 }