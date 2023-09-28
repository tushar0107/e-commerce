import React from "react";
import { Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import SearchResults from "../SearchResults";
import ProductPage from "../ProductPage";
import Profile from "../Profile";
import Header from "../Header";

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
      </Routes>
    </>
  );
}
