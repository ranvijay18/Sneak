import Home from './components/Pages/Home/Home';
import Store from './components/Pages/Store/Store';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import CartProvider from './components/context/CartProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/Pages/ProductDetails/ProductDetails';
import Login from './components/Pages/Login/Login';

function App() {

  return (
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/product/:productId' element={<ProductDetails/>} />
    </Routes>
  </BrowserRouter>
  </CartProvider>
  );
}

export default App;
