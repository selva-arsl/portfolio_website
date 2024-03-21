import React from "react";
import "./css/contact.css";
import { IoCallSharp } from "react-icons/io5";
import { FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

class Contact extends React.Component {
    render() {
        return (

            <>
                <div className="contact-container">

                    <h1>CONTACT <span>ME</span></h1>

                </div>

                <div className="contactme-container">
                    <div className="contactme-overall">

                        <div className="contact-left">

                            <div className="first-overall">
                                <IoCallSharp className="first" />

                                <div className="first-right">
                                    <h3>Call Us</h3>
                                    <p>+91 7397338973</p>

                                </div>
                            </div>

                            <div className="second-overall">
                                <FaMailBulk className="second" />

                                <div className="second-right">
                                    <h3>Email Us</h3>
                                    <p>Selvasamprash777@gmail.com</p>

                                </div>
                            </div>

                            <div className="thirds-overall">
                                <FaLocationDot className="third " />

                                <div className="third-right">
                                    <h3>Address</h3>
                                    <p>Address here, 3/153 saveriyar puram, Thirumayam Tk, Oonaiyur Post , Pudukkottai Dt. pin code: 622 505</p>

                                </div>
                            </div>
                        </div>


                        <div className="contact-right">
                            <form>

                                <div className="name-email">
                                    <input type="text" placeholder="Name" id="name" />
                                    <input type="text" placeholder="Email" id="email" />
                                </div>

                                <input type="text" placeholder="Subject" id="subject" />

                                <textarea placeholder="Message">


                                </textarea>

                                <div className="btn-overall">
                                    <button>send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </>
        );
    };
};

export default Contact;