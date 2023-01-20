import React  from 'react';
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Login from "./pages/Login"
import Product from "./components/Product"
import ShoppingCart from "./components/ShoppingCart"
import {BrowserRouter, Routes, Route, } from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/produit/:id" element={<Product/>}/> 
        <Route path="/mon-panier" element={<ShoppingCart/>}/> 
        <Route path="*" element={<NotFound/>}/> 
      </Routes>
    </BrowserRouter> 
  );
}

export default App;