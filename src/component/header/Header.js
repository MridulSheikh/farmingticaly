import React from 'react';
import { NavLink } from 'react-router-dom';
import"./header.css"
const Header = () => {
    //this is header 
    // this style for nav link
    const activeStyle ={
        fontWeight: "bold",
        borderBottom: "3px solid green",
        borderRadius : "1px"
    }
    return (
        <div className="d-flex justify-content-between px-5 py-2 header">
        <div className="logo">
       <h1>Farminglytical</h1>
        </div>
        <div className="d-flex align-items-center">
            <NavLink to="/home" className="text-light text-decoration-none me-5 px-3 py-2" activeStyle={activeStyle}>Home</NavLink>
            <NavLink to="/service" className="text-light text-decoration-none me-5 px-3 py-2" activeStyle={activeStyle}>Course</NavLink>
            <NavLink to="/about" className="text-light text-decoration-none me-5 px-3 py-2" activeStyle={activeStyle}>About</NavLink>
            <NavLink to="cart" className="text-light text-decoration-none p-3 py-2" activeStyle={activeStyle}>My Classes</NavLink>
        </div>
        </div>
    );
};

export default Header;