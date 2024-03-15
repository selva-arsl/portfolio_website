import React from "react";
import "./css/nav.css";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

class Nav_bars extends React.Component {
    render() {

        return (

            <nav>
                <div className="logo">
                    <h1>Logo</h1>
                </div>

                <ul className="Showmenu">
                    <li><Link className="h" to="/">Home</Link></li>
                    <li><Link className="a" to="/about">About</Link></li>
                    <li><Link className="p" to="/portfolio">Portfolio</Link></li>
                    <li><Link className="b" to="/blogs">Blogs</Link></li>
                    <li><Link className="c" to="/contact">Contact</Link></li>
                </ul>

                <div className="menu">
                    <IoMenu className="bar" />
                </div>



            </nav>
        );
    };
};

export default Nav_bars;