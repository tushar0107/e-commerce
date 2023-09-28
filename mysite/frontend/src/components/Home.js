import React from "react";
import './styles/product.css';
import './styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Home = ()=>{

    return(
        <>
            <div className="banner-container">
                <img src="./images/banner-image.jpeg" alt=""></img>
            </div>

            <div className="ladies-fashion-banner">
                <img src="./images/ladies-fashion-banner.png" alt=""></img>
                <span className="banner-text">
                    <h1>Slay with your fashion</h1>
                    <span>Exciting offers for your wardrobe </span>
                    <strong> upto 80% off</strong> on select products
                    <button>Shop Now</button>
                </span>
            </div>

            <div className="gallery">
                <span className="heading">New Offers</span>

                <div className="product-gallery">
                    <div className="card-container">
                        <img src="./images/fastrack-watch.jpeg" alt=""></img>
                        <p>Fastrack Analogue</p>
                        <div className="price-button">
                            <span className="offer-price">₹ 1799/- <span className="cut-price"> 3499/-</span></span>
                            <button className="addtocart"><span>+ Add to cart </span><FontAwesomeIcon icon={faShoppingCart} className="cart-icon"/></button>
                        </div>
                    </div>
                    <div className="card-container">
                        <img src="./images/grinder.jpeg" alt=""></img>
                        <p>Philips mixer-grinder</p>
                        <div className="price-button">
                        <span className="offer-price">₹ 8799/- <span className="cut-price"> 6799/-</span></span>
                        <button className="addtocart"><span>+ Add to cart </span><FontAwesomeIcon icon={faShoppingCart} className="cart-icon"/></button>
                        </div>
                    </div>
                    <div className="card-container">
                        <img src="./images/fastrack-watch.jpeg" alt=""></img>
                        <p>Fastrack </p>
                        <div className="price-button">
                        <span className="offer-price">₹ 3999/- <span className="cut-price"> 5499/-</span></span>
                        <button className="addtocart"><span>+ Add to cart </span><FontAwesomeIcon icon={faShoppingCart} className="cart-icon"/></button>
                        </div>
                    </div>
                    <div className="card-container">
                        <img src="./images/fastrack-watch.jpeg" alt=""></img>
                        <p>Fastrack </p>
                        <div className="price-button">
                        <span className="offer-price">₹ 1799/- <span className="cut-price"> 3499/-</span></span>
                        <button className="addtocart"><span>+ Add to cart </span><FontAwesomeIcon icon={faShoppingCart} className="cart-icon"/></button>
                        </div>
                    </div>
                    <div className="card-container">
                        <img src="./images/fastrack-watch.jpeg" alt=""></img>
                        <p>Fastrack Analogue</p>
                        <div className="price-button">
                        <span className="offer-price">₹ 1799/- <span className="cut-price"> 3499/-</span></span>
                        <button className="addtocart"><span>+ Add to cart </span><FontAwesomeIcon icon={faShoppingCart} className="cart-icon"/></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="collection">
                <div className="collection-card card-men">
                    <img src="./images/men-fashion.jpeg" alt=""></img>
                    <span>Men</span>
                </div>
                <div className="collection-card card-women">
                    <img src="./images/women-fashion.jpg" alt=""></img>
                    <span>Women</span>
                </div>
                <div className="collection-card card-kid">
                    <img src="./images/kid-fashion.jpeg" alt=""></img>
                    <span>Kids</span>
                </div>
            </div>

            <div className="banner-container mid">
                <img src="./images/nova-men-banner.jpeg" alt=""></img>
            </div>

            <div id="footer">
                    <h4>Developed By Tushar Dasare</h4>
                    <p><a href="mailto:tushardasare1701@gmail.com">tushardasare1701@gmail.com</a></p>
            </div>
        
        </>
    )
};

export default Home;