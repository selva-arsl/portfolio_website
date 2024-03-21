import React from "react";
import "./css/bar.css";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

class Bars extends React.Component {
    render() {

        return (

            <header>
                <div className="logo">
                    <h1>Selva samprash A</h1>
                </div>

                <nav className="nav-bar">

                    <ul className="Showmenu">
                        <li><Link className="h" to="/">Home</Link></li>
                        <li><Link className="a" to="/about">About</Link></li>
                        <li><Link className="p" to="/portfolio">Portfolio</Link></li>
                        <li><Link className="b" to="/blogs">Blogs</Link></li>
                        <li><Link className="c" to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className="hamburger">
                    <IoMenu className="line" />
                </div>



            </header>
        );
    };
};

export default Bars;