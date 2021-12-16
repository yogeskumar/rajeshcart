import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import Accesories from './components/accesories/Accesories';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';

function App () {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accesories" element={<Accesories/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    )
  }


export default App;