import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import SearchResults from './SearchResults';
import './styles/header.css';
import ProductPage from "./ProductPage";
import Home from "./Home";

export default function Header(){
    const [inputText, setInputText] = useState("")
    const handleChange = (e)=>{
        setInputText(e.target.value);
    };


    return(
        <>
        <Router>
            <div id="header">
                <span id="logo">Store</span>
                <span className="categorys">Clothing</span>
                <span className="categorys">Fashion</span>
                <span className="categorys">Electronics</span>
                <div id="header-nav">
                    
                    <form action="searc_product" method="get" id="header-search">
                        
                        <FontAwesomeIcon icon={faSearch} className="icon"/>
                        <input type="text" id="search" placeholder="Search.." onChange={handleChange} value={inputText} name="search" required></input>
                        <Link to="/search"><button type="submit" ></button></Link>
                    </form>
                    
                   
                    <span className="header-nav-btn"><a href="?" >Cart</a></span>
                    <span className="header-nav-btn"><FontAwesomeIcon icon={faUser}/></span>
                </div>
            </div>
            <Routes>
                <Route path='/' element={< Home />}></Route>
                <Route exact path='/search/*' element={< SearchResults  inputText={inputText}/>}></Route>
                <Route exact path='/product/:id' element={< ProductPage />}></Route> 
            </Routes>
        </Router>
        </>
    )
}