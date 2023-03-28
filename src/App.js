import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {Routes ,Route, BrowserRouter} from "react-router-dom"
import Header from "./component/Header";
import Card from "./component/Cards";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { Store } from "./component/product";
import ProductDetails from "./pages/ProductDetails";
import 'react-toastify/dist/ReactToastify.css';

import Footer from "./component/Footer";




function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/description/:id" element={<ProductDetails/>}/>   
 
      </Routes>
    
      <Footer/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
