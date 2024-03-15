import React from "react";
import "./css/home.css";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

class Home extends React.Component {
    render() {

        // let menuList = document.getElementsByClassName("menuList")
        // menuList.style.maxHeight = "0px";

        // function toggleMenu(){
        //     if (menuList.style.maxHeight == "0px") 
        //     {
        //         menuList.style.maxHeight = "300px";
        //     }
        //     else {
        //         menuList.style.maxHeight = "0px";
        //     }
        // }

        // const menu = document.querySelector(".menu");
        // const menuList = document.querySelector("nav ul");
        // menu.addEventListener('click', () => {
        //     menuList.classList.toggle("Showmenu");
        // });


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

export default Home;