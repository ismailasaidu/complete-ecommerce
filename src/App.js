import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {Routes ,Route, BrowserRouter, Navigate, useNavigate} from "react-router-dom"
import Header from "./component/Header";
import Card from "./component/Cards";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { Store } from "./component/product";
import ProductDetails from "./pages/ProductDetails";
import 'react-toastify/dist/ReactToastify.css';

import Footer from "./component/Footer";
import AdHome from "./pages/login/AdHome";
import Login from "./pages/login/Login";
import NewProduct from "./pages/login/NewProduct";


 




function App() {

  return (
    <div>
      {/* <BrowserRouter> */}
      <Header/>
      <Routes>
    
        <Route path="/" element={<Home/>}/>
        <Route path="description/:id" element={<ProductDetails/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/begin" element={<AdHome/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/newproduct" element={<NewProduct/>}/>
      
        {/* </HotKeys> */}
 
      </Routes>
    
      <Footer/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
