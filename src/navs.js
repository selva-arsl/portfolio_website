import React, { useState } from "react";
import "./css/navs.css";
import { Link } from "react-router-dom";

const Navs = () => {

    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar">
            <h3 className="logo">Portfolio</h3>

            <ul className={isMobile ? 'nav-links-mob' : 'nav-links'} onClick={()=>setIsMobile(false)}>
                <Link to="/" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/about" className="about">
                    <li>About</li>
                </Link>
                <Link to="/portfolio" className="portfolio">
                    <li>Portfolio</li>
                </Link>
                <Link to="/blogs" className="blogs">
                    <li>Blogs</li>
                </Link>
                <Link to="/contact" className="contact">
                    <li>Contact</li>
                </Link>
            </ul>

            <button className='mob-menu-icons' onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <h1>X</h1> : <h1>=</h1>}
            </button>

        </nav>
    )
}

export default Navs;