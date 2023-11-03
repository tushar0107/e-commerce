import React from "react";
import "./App.css";
import Header from "./components/Header";
import Routings from "./components/Routes/Routings";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routings />
      </BrowserRouter>
    </div>
  );
}

export default App;
