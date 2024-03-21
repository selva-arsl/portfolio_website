import React, { useState } from "react";
import "./css/nav.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import { GiHamburgerMenu } from "react-icons/gi";


function Nav_bars() {
    const [click, setClick] = useState(false);
    const Changes = () => setClick(!click);



    return (



        <>

            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Portfolio
                    </NavLink>


                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/about" activeClassName="active" className="nav-link">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/portfolio" activeClassName="active" className="nav-link">
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/blogs" activeClassName="active" className="nav-link">
                                Blogs
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/contact" activeClassName="active" className="nav-link">
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    <div className="nav-icon" onClick={Changes}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>

                        < GiHamburgerMenu className="change" />


                    </div>






                </div>
            </nav>









            {/* <nav>
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>

                    <ul id="menuList">
                        <li><Link className="h" to="/">Home</Link></li>
                        <li><Link className="a" to="/about">About</Link></li>
                        <li><Link className="p" to="/portfolio">Portfolio</Link></li>
                        <li><Link className="b" to="/blogs">Blogs</Link></li>
                        <li><Link className="c" to="/contact">Contact</Link></li>
                    </ul>

                    <div className="menu">
                        <IoMenu className="bar" onClick={toggleMenu} />
                    </div>



                </nav> */}

        </>
    );
};

export default Nav_bars;