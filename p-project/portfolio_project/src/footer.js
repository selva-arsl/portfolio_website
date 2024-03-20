import React from "react";
import "./css/footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">

                <div className="ft-left-side">
                    <h4>&#169; 2024 Selva samprash. All Rights Reserved.</h4>
                </div>

                <div className="ft-rights-side">
                
                        <FaFacebook className="facebook"/>
                        <FaInstagram className="instagram"/>
                        <IoLogoWhatsapp className="whatsapp"/>
                        <FaLinkedin className="linkedin"/>
                        <FaGithub className="github"/>
                        <FaTwitter className="twitter"/>
                    
                </div>

            </div>
        );
    };
};

export default Footer;