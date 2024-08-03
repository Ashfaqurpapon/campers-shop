import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./Components/FiltredProducts/FilteredProducts";
import SingleProduct from "./Components/FiltredProducts/SingleProduct";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";
import About from "./Components/About us/about";
import Products from "./Components/Products/Products";
import ProductManagement from "./Components/productsManagment/productsManagment";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  window.onbeforeunload = function () {
    return "Data will be lost if you leave the page, are you sure?";
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Main></Main> : <Login></Login>}
          ></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route
            path="/productsManagment"
            element={<ProductManagement></ProductManagement>}
          ></Route>

          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts></FilteredProducts>}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
