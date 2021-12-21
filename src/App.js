import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import Accesories from './components/accesories/Accesories';
import Cart from './components/Cart';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/Login';
import NavBar from './components/navbar/NavBar';
import Register from './components/Register';

function App () {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accesories" element={<Accesories />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    )
  }


export default App;