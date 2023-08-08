import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import SearchResults from './components/SearchResults';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import ProductCard from './components/ProductCard';
// import axios from "axios";

// const MyContext = React.createContext();

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
            {/* <Link to="/"></Link> */}
            
            
            <Routes>
              <Route exact path='/' element={< Home />}></Route>   
            </Routes>
      </Router>
      
    </div>
  );
}

export default App;