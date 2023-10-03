import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Cart from  './pages/cart/Cart';
import Nave from './component/navbar/Nave';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import { ShopContextProvider } from './context/ShopContext';
import Footer from './component/footer/Footer';
import Arrow from './component/arrowfortop/Arrow';

function App() {
  return(
  <ShopContextProvider>
     <Router className="bbb">
      <Nave />
     <Arrow/>
         <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Login'element={<Login/>}/>
         </Routes>
         <Footer/>
     </Router>
     </ShopContextProvider>
   
  )
  }


export default App;
