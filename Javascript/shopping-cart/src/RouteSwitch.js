import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Cart from './Cart';
import Shop from './Shop';
import About from './About';
import Navbar from './Navbar';
import './App.css';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;
