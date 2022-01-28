import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Homepage from './components/Homepage';
import Cart from './components/Cart';
import Shop from './components/Shop';
import About from './components/About';
import Navbar from './components/Navbar';
import itemsData from './storage/itemsData';
import './App.css';

const RouteSwitch = () => {
  const [items, setItems] = useState(itemsData);

  const changeCart = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setItems(items.map((item) => (item.id === id ? { ...item, amount: [value] } : item)));
  };

  const removeItem = (e) => {
    const id = e.target.previousSibling.firstChild.id;
    setItems(items.map((item) => (item.id === id ? { ...item, amount: 0 } : item)));
  };

  const displayCard = (card) => {
    const total = Number(Number(card.amount) * Number(card.price));
    const totalDollar = `$${total}`;
    return (
      <div key={card.id} className="card">
        <img className="card-img" src={card.src} alt={card.name}></img>
        <p>
          {card.name} ${card.price}
        </p>
        <p>
          <input
            id={card.id}
            onChange={changeCart}
            className="item-input"
            type="number"
            min="0"
            max="999"
            value={card.amount}></input>

          {card.amount > 0 ? ` ${totalDollar}` : ` $0`}
        </p>
        <button onClick={removeItem}>Cancel</button>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar items={items} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop items={items} displayCard={displayCard} />} />
          <Route path="cart" element={<Cart items={items} displayCard={displayCard} />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;
