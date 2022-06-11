import React from 'react';
import './App.css';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>

    </div>
  );
}

export default App;
