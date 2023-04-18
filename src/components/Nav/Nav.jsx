import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";
import { FaHome, FaHeart, FaAddressCard } from 'react-icons/fa';


const Nav = ({ onSearch }) => {
    return ( 
    <div className="nav">
        <a href="https://www.adultswim.com/videos/rick-and-morty" target="_blank">
        <img src="https://vish213-rick-and-morty.netlify.app/static/media/logo.eab63707.png" className="img" /> </a>
        <SearchBar onSearch={onSearch}/>
        <Link to="/about">
        <FaAddressCard className="about">
            <h3 className="about">About</h3></FaAddressCard>
            </Link>
            <Link to="/home">
                <FaHome className="home">
            <h3 className="home">Home</h3></FaHome>
            </Link>
            <Link to="/favorites">
            <FaHeart className="favorites">
            <h3 className="favorites">Favorites</h3></FaHeart>
            </Link>
         </div>
    ) 
}

export default Nav;
