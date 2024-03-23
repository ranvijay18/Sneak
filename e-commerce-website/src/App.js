import './App.css';
import Home from './components/Pages/Home/Home';
import Store from './components/Pages/Store/Store';
import About from './components/Pages/About/About';
import CartProvider from './components/context/CartProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  </CartProvider>
  );
}

export default App;
