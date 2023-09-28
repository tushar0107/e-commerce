import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './styles/header.css';
import axios from "axios";

export default function Header(){
    const [inputText, setInputText] = useState("")
    const handleChange = (e)=>{
        setInputText(e.target.value);
    };



    return(
        <>
        
            <div id="header">
                <span id="logo">Store</span>
                <span className="categorys">Clothing</span>
                <span className="categorys">Fashion</span>
                <span className="categorys">Electronics</span>
                <div id="header-nav">
                    
                    <form action="searc_product" method="get" id="header-search">
                        
                        <FontAwesomeIcon icon={faSearch} className="icon"/>
                        <input type="text" id="search" placeholder="Search.." onChange={handleChange} value={inputText} name="search" required></input>
                        <Link to={`/search/${inputText}`}><button type="submit" ></button></Link>
                    </form>
                    
                   
                    <span className="header-nav-btn"><a href="?" >Cart</a></span>
                    <span className="header-nav-btn"><Link to={"/user"}><FontAwesomeIcon icon={faUser}/></Link></span>
                </div>
            </div>
        </>
    )
}