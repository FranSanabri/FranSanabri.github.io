import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";

const Nav = ({ onSearch }) => {
    return ( 
    <div className="nav">
        <a href="https://www.adultswim.com/videos/rick-and-morty" target="_blank">
        <img src="https://vish213-rick-and-morty.netlify.app/static/media/logo.eab63707.png" className="img" /> </a>
        <SearchBar onSearch={onSearch}/>
        <Link to="/about">
            <h3 className="about">About</h3>
            </Link>
            <Link to="/home">
            <h3 className="home">Home</h3>
            </Link>
            <Link to="/favorites">
            <h3 className="favorites">Favorites</h3>
            </Link>
         </div>
    ) 
}

export default Nav;
