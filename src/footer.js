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

                    <a href="https://www.facebook.com/profile.php?id=100008707067414"><FaFacebook className="facebook" /></a>
                    <a href="https://www.instagram.com/selvasamprash/"><FaInstagram className="instagram" /></a>
                    <a href="https://www.whatsapp.com/"><IoLogoWhatsapp className="whatsapp" /></a>
                    <a href="https://in.linkedin.com/"><FaLinkedin className="linkedin" /></a>
                    <a href="https://github.com/selva-arsl"><FaGithub className="github" /></a>
                    <a href="https://twitter.com/?lang=en"> <FaTwitter className="twitter" /></a>




                </div>

            </div>
        );
    };
};

export default Footer;