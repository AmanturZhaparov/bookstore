import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DetailedPage from "./pages/product/DetailedPage";
import DenseAppBar from "./bookbar";
import SearchAppBar from "./appbar"
import CartPage from "./pages/cart/CartPage";

function App() {
  return (
    
    <>
      
      <DenseAppBar />
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<DetailedPage />} />
        <Route path="/cart" element={<CartPage/>}/>

      </Routes>
    </>
  );
}

export default App;
