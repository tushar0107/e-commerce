import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './styles/header.css';

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
                <span className="categorys"><Link to="/gallery">Electronics</Link></span>
                <div id="header-nav">
                    
                    <div id="header-search">
                        
                        <FontAwesomeIcon icon={faSearch} className="icon"/>
                        <input type="text" id="search" placeholder="Search.." onChange={handleChange} value={inputText} name="search" required></input>
                        <Link to={`/search/${inputText}`}><button type="submit" className="search-btn"><FontAwesomeIcon icon={faArrowRight}/></button></Link>
                    </div>
                    
                   
                    <span className="header-nav-btn"><Link to={"/cart"}>Cart</Link></span>
                    <span className="header-nav-btn"><Link to={"/user"}><FontAwesomeIcon icon={faUser}/></Link></span>
                </div>
            </div>
        </>
    )
}