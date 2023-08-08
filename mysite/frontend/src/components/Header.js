import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import SearchResults from './SearchResults';
import './styles/header.css';

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
                <div id="header-nav">
                    
                    <form action="searc_product" method="get" id="header-search">
                        
                        <FontAwesomeIcon icon={faSearch} className="icon"/>
                        <input type="text" id="search" placeholder="Search.." onChange={handleChange} value={inputText} name="search"></input>
                            <Link to="/search"><button type="submit" ></button></Link>
                    </form>
                    
                   
                    <span className="header-nav-btn"><a href="?" >Cart</a></span>
                    <span className="header-nav-btn"><FontAwesomeIcon icon={faUser}/></span>
                </div>
            </div>
            <Routes>
                <Route exact path='/search' element={< SearchResults url={'http://127.0.0.1:8000/api/products/?search='+inputText} />}></Route>
            </Routes>
        </Router>
        </>
    )
}