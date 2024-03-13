import React from "react";
import "./css/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Selva_db from "./assets/selva_db.jpg";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";

class Nav_bar extends React.Component {
    render() {
        return (
            <>

                <div className="menu-main">

                    {/* first part image and heading */}

                    <div className="menu-btn">
                        <GiHamburgerMenu className="menu" />
                    </div>

                    <div className="sidebar active">
                        <header>
                            <div className="close-btn">
                                <IoCloseSharp className="close" />

                            </div>

                            <div className="img">
                                <img src={Selva_db} alt="selva samprash A" />
                            </div>
                            <h1>selva samprash a</h1>
                        </header>

                        {/* second part menu items */}

                        <div className="menu">
                            <div className="item">
                                <a href="#"> <IoHome className="icon home" />Home</a>

                            </div>
                            <div className="item">
                                <a href="#"> <IoPerson className="icon about" />About</a>

                            </div>
                            <div className="item">
                                <a href="#"> <MdBusinessCenter className="icon portfolio" />Portfolio</a>

                            </div>
                            <div className="item">
                                <a href="#"> <FaBlog className="icon blogs" />Blogs</a>

                            </div>
                            <div className="item">
                                <a href="#"> <BiSolidContact className="icon contact" />Contact</a>

                            </div>
                        </div>
                    </div>

                </div>

            </>

        );
    };
};

export default Nav_bar;