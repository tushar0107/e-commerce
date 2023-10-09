import React from "react";
import { Routes, Route, } from "react-router-dom";
import Home from "../Home";
import SearchResults from "../SearchResults";
import ProductPage from "../ProductPage";
import Profile from "../Profile";
import Cart from "../Cart/Cart";
import Gallery from "../Gallery";

export default function Routings() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/search/:searchText"
          element={<SearchResults />}
        ></Route>
        <Route exact path="/product/:id" element={<ProductPage />}></Route>
        <Route exact path="/user" element={<Profile />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/gallery" element={<Gallery/>}></Route>
      </Routes>
    </>
  );
}
